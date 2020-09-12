let keyword = 'presente'
let messageToSend = 'Presente'
let messagesCheckCount = 2
let interval = 500

const getInput = () => document.getElementsByClassName('cke_reset cke_enable_context_menu cke_editable cke_editable_themed cke_contents_ltr cke_show_borders')[0].getElementsByTagName('div')[0]

const setInputValue = (value) => getInput().innerText = value

const getAllMessages = () => [...document.querySelectorAll('[data-tid="messageBodyContent"]')].map(x => x.getElementsByTagName('div')[0].innerText)

const getLastMessages = n => getAllMessages().slice(-n)

const getSubmitButton = () => document.getElementById('send-message-button')

const clickSubmitButton = () => getSubmitButton().click()

const sendMessage = (message) => {
  setInputValue(message)
  clickSubmitButton()
}

const main = () => {
  const messages = getLastMessages(messagesCheckCount).map(x => x.toLowerCase())
  const containsKeyword = messages != null && messages.length && messages.every(x => x.includes(keyword))
  if(containsKeyword){
    console.log(`Array with messages: ${messages} contains keyword: ${keyword}`)
    sendMessage(messageToSend)
    stopInterval()
  }
  else {
    console.log(`Array with messages: ${messages} does not contain keyword: ${keyword}`)
  }
}
var mainInterval = setInterval(() => {
  main()
}, interval)

const stopInterval = () => clearInterval(mainInterval)
