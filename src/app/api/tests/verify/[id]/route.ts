import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const testId = Number(params.id);
    
    // Временная проверка
    const isValid = testId > 0 && testId < 1000; // Пример простой валидации

    return NextResponse.json({
      valid: isValid,
      testId: isValid ? testId : null
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}