import { NextResponse } from "next/server";
import {
  assertBodySize,
  createBookingFromRequest,
  type BookingRequestBody,
} from "@/lib/visit/booking";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const raw = await request.text();
    const sizeFail = assertBodySize(Buffer.byteLength(raw, "utf8"));
    if (sizeFail) {
      return NextResponse.json(
        { error: sizeFail.error },
        { status: sizeFail.status },
      );
    }

    let body: BookingRequestBody;
    try {
      body = JSON.parse(raw) as BookingRequestBody;
    } catch {
      return NextResponse.json(
        { error: "Некорректный формат запроса." },
        { status: 400 },
      );
    }

    const result = createBookingFromRequest(body);
    if (!result.ok) {
      return NextResponse.json(
        { error: result.error },
        { status: result.status },
      );
    }

    return NextResponse.json(
      {
        ok: true,
        id: result.booking.id,
        visitDate: result.booking.visitDate,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Не удалось сохранить заявку. Попробуйте позже." },
      { status: 500 },
    );
  }
}
