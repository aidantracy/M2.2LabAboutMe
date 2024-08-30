window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    console.log("The content has loaded successfully!")
}

/**
 * This function returns a call to the modal functions
 * @return {showModal} call
 */
export function sayHello() {
    return showModal()
}

/////////chatGPT generated content//////////////////////////
function showModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
////////////////////////////////////////////////////////////


window.closeModal = closeModal;
window.sayHello = sayHello;