const percentItems = document.querySelectorAll('.list__percent-item');
            const quantityItems = document.querySelectorAll('.liter__percent-item');
            const priceElement = document.getElementById('information__price');
          
            const prices = {
              '500 мл': {
                '37%': 195,
                '15%': 170,
                '7%': 150,
              },
              '1 л': {
                '37%': 380,
                '15%': 355,
                '7%': 335,
              },
              '4 л': {
                '37%': 730,
                '15%': 700,
                '7%': 680,
              },
              '20 л': {
                '37%': 3600,
                '15%': 3200,
                '7%': 3000,
              },
            };
          
            function updatePrice() {
              let selectedPercent = null;
              let selectedQuantity = null;
          
              percentItems.forEach(item => {
                if (item.classList.contains('selected')) {
                  selectedPercent = item.textContent;
                  item.style.color = '#151C22';
                } else {
                  item.style.color = '';
                }
              });
          
              quantityItems.forEach(item => {
                if (item.classList.contains('selected')) {
                  selectedQuantity = item.textContent;
                  item.style.color = '#151C22';
                } else {
                  item.style.color = '';
                }
              });
          
              if (selectedPercent && selectedQuantity) {
                const newPrice = prices[selectedQuantity][selectedPercent];
                if (newPrice !== undefined) {
                  priceElement.textContent = `₴${newPrice}`;
                }
              }
            }
          
            updatePrice(); // Вызовем функцию сразу при загрузке страницы
          
            percentItems.forEach(item => {
              item.addEventListener('click', () => {
                percentItems.forEach(item => {
                  item.classList.remove('selected');
                });
                item.classList.add('selected');
                updatePrice();
              });
            });
          
            quantityItems.forEach(item => {
              item.addEventListener('click', () => {
                quantityItems.forEach(item => {
                  item.classList.remove('selected');
                });
                item.classList.add('selected');
                updatePrice();
              });
            });