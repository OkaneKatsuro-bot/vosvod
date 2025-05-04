"use client";
import { motion } from 'framer-motion';
import { Keyboard, Monitor, Contrast, ArrowUp } from 'lucide-react';

const AccessibilityGuide = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 py-8"
    >
      {/* Заголовок */}
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Инструкция для слабовидящих
        </h1>
        <p className="text-lg text-gray-700">
          Сайт АНО ДПО "УЦС" доступен для людей с ограниченными возможностями
        </p>
      </div>

      {/* Способ 1 */}
      <motion.section 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="mb-12 bg-white rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Keyboard className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Способ 1: Управление масштабом в браузере
          </h2>
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Горячие клавиши:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + 
                <kbd className="bg-gray-100 px-2 py-1 rounded">+</kbd> - Увеличить масштаб
              </li>
              <img 
        src="/mn-1.png" 
        alt="Пример управления масштабом в браузере"
        className="rounded-lg border-2 border-blue-100 shadow-sm"
      />
              <li>
                <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + 
                <kbd className="bg-gray-100 px-2 py-1 rounded">-</kbd> - Уменьшить масштаб
              </li>
              <li>
                <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + 
                <kbd className="bg-gray-100 px-2 py-1 rounded">0</kbd> - Сброс масштаба
              </li>
              <li>
                <kbd className="bg-gray-100 px-2 py-1 rounded">Ctrl</kbd> + 
                Колесо мыши - Плавное изменение масштаба
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Инструкции для браузеров:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {['Chrome', 'Firefox', 'Opera', 'Edge'].map((browser) => (
                <div key={browser} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-600">{browser}</h4>
                  <p className="text-sm mt-2">
                    Меню → Настройки масштаба → Используйте кнопки "+" и "-"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Способ 2 */}
      <motion.section 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="mb-12 bg-white rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Monitor className="w-8 h-8 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Способ 2: Экранная лупа
          </h2>
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Windows 7/8/10/11</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Нажмите <kbd>Win</kbd> + <kbd>+</kbd></li>
                <li>Используйте <kbd>Win</kbd> + <kbd>ESC</kbd> для выхода</li>
                <li>Три режима: полный экран, область, закрепленный</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Windows XP</h3>
              <p className="text-sm">
                Пуск → Программы → Стандартные → Специальные возможности → Экранная лупа
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Способ 3 */}
      <motion.section 
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="mb-12 bg-white rounded-xl p-6 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <Contrast className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Способ 3: Высокая контрастность
          </h2>
        </div>

        <div className="space-y-6 text-gray-700">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Активация:</h3>
            <p className="mb-2">
              Нажмите <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Print Screen</kbd>
            </p>
            <p className="text-sm">
              Настройки → Персонализация → Цвета → Выберите контрастную тему
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Дополнительные технологии:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Программы чтения с экрана (NVDA, JAWS)</li>
              <li>Брайлевские дисплеи</li>
              <li>Синтезаторы речи</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Заключение */}
      <div className="text-center py-8 border-t border-gray-200">
        <p className="text-lg text-gray-700 mb-4">
          С уважением, администрация сайта
        </p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
          Вернуться к началу
        </button>
      </div>
    </motion.div>
  );
};

export default AccessibilityGuide;
