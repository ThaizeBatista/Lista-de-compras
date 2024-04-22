const $lista = document.querySelector('ul')
        const $produto = document.querySelector('#produto')
        const $botao = document.querySelector('#btn')

        $botao.addEventListener('click', adcProduto)

        function adcProduto() {
            const $item = `<li>${$produto.value}</li>`
            $lista.innerHTML += $item
            $produto.value = ''
            $produto.focus()
        }

        $produto.addEventListener('keydown', apertaEnter => {
            if (apertaEnter.keyCode === 13) {
                adcProduto()
            }
        })