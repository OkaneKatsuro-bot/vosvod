// src/app/test/[testId]/ticket/[ticketNumber]/page.tsx
export default function Page({ params }: { 
    params: { 
      testId: string, 
      ticketNumber: string 
    }
  }) {
    return (
      <div className="p-4 text-2xl font-bold text-green-600">
        Тест #{params.testId}, Билет #{params.ticketNumber}
      </div>
    );
  }