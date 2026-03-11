function Button({title, onClick}) {
  return <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer" onClick={onClick}>
    {title}
  </button>
}

export default Button;