import { render, h } from "preact"

function HelloWorld(props) {
  return (
    <h1 className="text-gray-600 text-xl font-bold">Hello {props.name} 🎉</h1>
  )
}

const app = (
  <div className="p-6 text-center antialiased">
    <HelloWorld name="world" />
  </div>
)

render(app, document.getElementById("app"))
