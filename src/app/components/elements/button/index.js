import React from 'react'

function Button({ type, status = false, children }) {
    let componentClass = ['px-4', 'py-2', 'text-white', 'bg-blue-500', 'rounded-full']

    type === 'success' ? componentClass.push('!bg-green-500') : ''
    return (
        <button className={componentClass.join(' ')} disable={status}>
            {children}
        </button>
    )
}

export default Button