export const verifyTestAccess = async (testId: number) => {
  try {
    const response = await fetch(`/api/tests/verify/${testId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.valid) {
      throw new Error('Тест не найден или доступ запрещен');
    }

    return data;
  } catch (error) {
    throw new Error('Ошибка проверки доступа: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
};