# Критерии приема

- Создан репозиторий `goit-react-hw-06-phonebook`
- При сдаче домашней работы есть ссылки: на исходные файлы и рабочую страницу
  проекта на `GitHub Pages` или `Netlify`
- В Redux-состоянии хранится минимально необходимый набор данных
- При запуске кода задания, в консоли нету ошибок и предупреждений
- Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
  стилей
- Для компонентов описаны `propTypes`, и где необходимо, `defaultProps`

## Телефонная книга

Выполни рефакторинг кода приложения «Телефонная книга» добавив управление
состоянием при помощи библиотеки [Redux](https://redux.js.org/).

Пусть Redux-состояние выглядит следующим образом.

```shell
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

### Шаг 1

Используй только возможности библиотеки Redux (без redux-toolkit).

- Создай хранилище и добавь
  [инструменты разработчика](http://extension.remotedev.io/)
- Создай действия (actions) сохранения и удаления контакта, а также обновления
  фильтра.
- Вынеси типы действий в отдельный файл констант.
- Создай редюсеры контактов и фильтра.
- Свяжи React-компоненты с Redux-логикой при помощи бибилиотеки
  [react-redux](https://react-redux.js.org/).

### Шаг 2

Выполни рефакторинг кода и сократи Redux-бойлерплейт используя библиотеку
[Redux Tookit](https://redux-toolkit.js.org/). Используй функции
`configureStore()`, `createAction()` и `createReducer()`.

# Getting Started with Create React App

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here:
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here:
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here:
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here:
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here:
[https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here:
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
