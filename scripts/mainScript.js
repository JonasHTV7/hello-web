function dropdown(a) {
    var activator = a.parentNode.getElementsByClassName("dropdown-button")
    var dropdown = a.parentNode.getElementsByClassName("dropdown-content")
    activator[0].classList.toggle("dropdown-active")
    dropdown[0].classList.toggle("show");
}
function sectionCollapse(a) {
    var activator = a.parentNode.getElementsByTagName("h2")
    var content = a.parentNode.getElementsByClassName("container")
    activator[0].classList.toggle("section-visible")
    activator[0].classList.toggle("section-hidden")
    content[0].classList.toggle("hide")
}