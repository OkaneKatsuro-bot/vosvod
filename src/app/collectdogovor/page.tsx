// app/documents/collective-agreement/page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Информация о правилах коллективного договора',
  description: 'Сведения о наличии коллективного договора в организации',
};

export default function CollectiveAgreementPage() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800 pb-80">
      <h1 className="text-2xl font-bold mb-4">
        Информация о правилах коллективного договора
      </h1>
      <p className="text-lg leading-relaxed">
        На данный момент <strong>коллективный договор отсутствует</strong> в
        соответствии со статьёй 40 Трудового кодекса Российской Федерации.
      </p>
      <p className="mt-4 text-sm text-gray-600">
        Статья 40 ТК РФ гласит, что коллективный договор заключается по
        инициативе работников и (или) работодателя и является необязательным
        документом.
      </p>
    </main>
  );
}
