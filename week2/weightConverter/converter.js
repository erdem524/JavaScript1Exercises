const kgInput = document.getElementById('kg')
      const poundInput = document.getElementById('pound')
      const ounceInput = document.getElementById('ounce')
      function kgToPoundAndOunce () {
        const kg = parseFloat(kgInput.value)
        const pound = kg * 2.20462
        const ounce = kg * 35.274
        poundInput.value = pound.toFixed(2)
        ounceInput.value = ounce.toFixed(2)
      }

      kg.addEventListener('input', kgToPoundAndOunce)