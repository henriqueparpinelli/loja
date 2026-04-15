document.addEventListener('DOMContentLoaded', () => {

    
    const hamburger = document.querySelector('.menu-hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const links = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            
            sections.forEach(section => section.classList.add('hidden'));

            
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.classList.remove('hidden');

        
            navMenu.classList.remove('active');
        });
    });

    
    let carrinho = [];

    function atualizarCarrinho() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = carrinho.length;
    }

    
    document.querySelectorAll('.btn-comprar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            let produto;

            if (id === "1") {
                produto = { id: 1, nome: "Monza Tubarão", preco: 12000 };
            } else if (id === "2") {
                produto = { id: 2, nome: "Chevrolet Opala", preco: 15000 };
            }

            carrinho.push(produto);
            atualizarCarrinho();
            alert(`${produto.nome} adicionado ao carrinho!`);
        });
    });

    
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');

    document.querySelectorAll('.btn-detalhes').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');

            if (id === "1") {
                document.getElementById('modal-img').src = "Gemini_Generated_Image_aawcm1aawcm1aawc.png";
                document.getElementById('modal-titulo').textContent = "Monza Tubarão (1991-1996)";
                document.getElementById('modal-descricao').textContent = "Versão esportiva com motor turbo. Um dos mais desejados dos anos 90 no Brasil.";
                document.getElementById('modal-preco').textContent = "R$ 12.000,00";
            } else if (id === "2") {
                document.getElementById('modal-img').src = "unnamed.jpg";
                document.getElementById('modal-titulo').textContent = "Chevrolet Opala";
                document.getElementById('modal-descricao').textContent = "Ícone absoluto do automobilismo brasileiro, produzido de 1968 a 1992.";
                document.getElementById('modal-preco').textContent = "R$ 15.000,00";
            }

            modal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
    });

    
    document.querySelector('a[href="#carrinho"]').addEventListener('click', () => {
        console.log("Carrinho:", carrinho);
    });


    document.getElementById('form-cadastro').addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Cadastro realizado com sucesso! 🎉\nBem-vindo à família Clássicos Turbo!");
    });

    document.getElementById('produtos').classList.remove('hidden');
});