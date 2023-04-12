const userEmail = localStorage.getItem('userEmail') || ''

const userName = userEmail.split('@')[0].charAt(0).toUpperCase() + userEmail.split('@')[0].slice(1)

export default userName
