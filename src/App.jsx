

function App() {
  
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 p-6 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10  w-250 h-160">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold text-blue-600">Эржан</h1>
          <p className="text-lg text-center">
            Frontend разработчик с 3-летним опытом. Умею создавать адаптивные, быстрые и красивые сайты.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-weight: 600 mb-4">Навыки</h2>
          <ul className="flex flex-wrap gap-4 text-white">
            <li className="bg-blue-500 w-20 h-12 rounded-full flex justify-center items-center">HTML</li>
            <li className="bg-blue-500 w-20 rounded-full flex justify-center items-center">CSS</li>
            <li className="bg-blue-500 w-30 rounded-full flex justify-center items-center">JavaScript</li>
            <li className="bg-blue-500 w-20 rounded-full flex justify-center items-center">React</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-weight: 600 mb-4">Опыт</h2>
          <p>Разработка проектов на React, работа с Tailwind CSS, создание адаптивных и современных интерфейсов.</p>
        </div>

        <div className=" h-40 mt-8">
          <h2 className="text-2xl font-weight: 600 mb-4">Контакты</h2>
          <ul className="h-20">
            <li className=""><p className="text-lg font-bold">Email:</p><a href="erjsuy44@gmail.com"> erjsuy44@gmail.com </a></li>
            <li><p className="text-lg font-bold">Telegram:</p> <a href="https://t.me/@Nekitigoser"> Warker</a></li>
            <li><p className="text-lg font-bold">GitHub:</p> <a href="https://github.com/ERjsuy">"Сюда"</a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
