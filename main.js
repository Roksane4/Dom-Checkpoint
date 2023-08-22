document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
  
    items.forEach((item) => {
      const quantity = item.querySelector(".quantity");
      const plusBtn = item.querySelector(".plus");
      const minusBtn = item.querySelector(".minus");
      const deleteBtn = item.querySelector(".delete-btn");
      const likeBtn = item.querySelector(".like-btn");
      const price = item.querySelector(".price");
  
      plusBtn.addEventListener("click", () => {
        quantity.textContent = parseInt(quantity.textContent) + 1;
        updateTotal();
      });
  
      minusBtn.addEventListener("click", () => {
        const currentQuantity = parseInt(quantity.textContent);
        if (currentQuantity > 1) {
          quantity.textContent = currentQuantity - 1;
          updateTotal();
        }
      });
  
      deleteBtn.addEventListener("click", () => {
        item.remove();
        updateTotal();
      });
  
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
      });
  
      function updateTotal() {
        let total = 0;
        items.forEach((item) => {
          const itemPrice = parseFloat(item.querySelector(".price").textContent.slice(1));
          const itemQuantity = parseInt(item.querySelector(".quantity").textContent);
          total += itemPrice * itemQuantity;
        });
        document.querySelector(".total-price").textContent = `$${total.toFixed(2)}`;
      }
    });
  });