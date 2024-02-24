// page scroll function

function scrollFunction() {
  window.scroll({
    top: 1900,
    behavior: "smooth",
  });
  
  }
// Select buss sets

       const buttons = document.getElementsByClassName('set');
            for( const button of buttons){
                button.addEventListener('click', function(event){
                  const selectSet = event.target;
                    selectSet.classList.add('set-select');
                    event.target.setAttribute('disabled', false);

                  // add dinamically table data
                  const table = document.getElementById('set-table');
                  const tableRo = document.createElement('tr');
                  const td1 = tableRo.appendChild(document.createElement('td'));
                  const td2 = tableRo.appendChild(document.createElement('td'));
                  const td3 = tableRo.appendChild(document.createElement('td')); 
                 
                  const innerValue = selectSet.innerText;
                  td1.innerText = innerValue;
                  td2.innerText = 'economy';
                  td3.innerText = '550';
                  td1.innerText = innerValue;
                  table.appendChild(tableRo);

                  // count available set
                  const availableSet =document.getElementById('full-set');
                  const availableSetIneerContent = availableSet.innerText;
                  const setConvertNumber = parseInt(availableSetIneerContent);
                  const setLeft = setConvertNumber - 1;

                  availableSet.innerText = setLeft;

                  // selected sets
                  const selectedSet = document.getElementById('add-set');
                  const selectedInnerValue = selectedSet.innerText;
                  const selectedSetConvert = parseInt( selectedInnerValue);
                  
                  const totalSelected = selectedSetConvert + 1;
                  selectedSet.innerText = totalSelected;

                  // counted price
                  const defaultPrice = document.getElementById('total-price');
                  const defaultPriceInnerValue = defaultPrice.innerText; 
                  const defaultPriceConvert = parseInt(defaultPriceInnerValue);

                  const updatePrice = defaultPriceConvert + 550;
                  defaultPrice.innerText = updatePrice;

                  // Grand Total
                  const grandTotal = document.getElementById('grand-total');
                  grandTotal.innerText = updatePrice;
                })
            }

            document.getElementById('copon-btn').addEventListener('click', function(){
              const legalCopon = document.getElementById('cupon');
               const validCopon = legalCopon.value;
               

              if( validCopon == 'New15'){
                const couponNew15 =getValueById('grand-total');
                const totalPrice = getValueById('total-price');
                const couponRet = totalPrice * 0.15;
                const finalGrandTotal = couponNew15 - couponRet;

              
               const initialValue = document.getElementById('grand-total');
               initialValue.innerText = finalGrandTotal;
                

              }else if( validCopon == 'couple 20'){
                const couponCouple20 =getValueById('grand-total');
                const totalPrice = getValueById('total-price');
                const couponRet = totalPrice * 0.2;
                const finalGrandTotal = couponCouple20 - couponRet;
                
               const initialValue = document.getElementById('grand-total');
               initialValue.innerText = finalGrandTotal;
              }else{
                alert('Please provide a valid coupon code.');
              }

            })
            

    // function for get inner Value By Id    
    function getValueById(element){
     const elementId = document.getElementById(element);
     const elementIdInnerValue = elementId.innerText;
     const elementIdParseValue = parseInt(elementIdInnerValue);
     
     return elementIdParseValue;
    }
            
    
    
   