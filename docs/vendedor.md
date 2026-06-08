<script setup>
import { ref, computed } from 'vue'

const produtoAtual = ref('')
const precoAtual = ref('')
const carrinho = ref([
  { id: 1, nome: 'PC Gamer RTX 4060', preco: 5499.00, qtd: 1 }
])
const vendaFinalizada = ref(false)

const total = computed(() => {
  return carrinho.value.reduce((acc, item) => acc + (item.preco * item.qtd), 0)
})

const adicionarItem = () => {
  if(produtoAtual.value && precoAtual.value) {
    carrinho.value.push({
      id: Date.now(),
      nome: produtoAtual.value,
      preco: parseFloat(precoAtual.value),
      qtd: 1
    })
    produtoAtual.value = ''
    precoAtual.value = ''
  }
}

const removerItem = (index) => {
  carrinho.value.splice(index, 1)
}

const finalizarVenda = () => {
  if (carrinho.value.length === 0) return
  vendaFinalizada.value = true
  carrinho.value = []
  setTimeout(() => vendaFinalizada.value = false, 4000)
}
</script>

# Painel do Vendedor (PDV)

Frente de Caixa e Ponto de Venda.

<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
  <h3>Adicionar Produto Manualmente</h3>
  <div style="display: flex; gap: 10px; margin-bottom: 20px;">
    <input v-model="produtoAtual" type="text" placeholder="Nome do Produto" style="flex: 2; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
    <input v-model="precoAtual" type="number" placeholder="Preço (R$)" style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
    <button @click="adicionarItem" style="padding: 8px 15px; background-color: #2980b9; color: white; border: none; border-radius: 4px; cursor: pointer;">Adicionar</button>
  </div>
  <h3>Carrinho de Compras</h3>
  <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;">
    <thead>
      <tr style="background-color: #eee;">
        <th style="padding: 10px; border: 1px solid #ccc;">Produto</th>
        <th style="padding: 10px; border: 1px solid #ccc;">Preço Un.</th>
        <th style="padding: 10px; border: 1px solid #ccc;">Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in carrinho" :key="item.id">
        <td style="padding: 10px; border: 1px solid #ccc;">{{ item.nome }}</td>
        <td style="padding: 10px; border: 1px solid #ccc;">R$ {{ item.preco.toFixed(2) }}</td>
        <td style="padding: 10px; border: 1px solid #ccc;"><button @click="removerItem(index)" style="color: red; background: none; border: none; cursor: pointer;">Remover</button></td>
      </tr>
      <tr v-if="carrinho.length === 0">
        <td colspan="3" style="padding: 10px; border: 1px solid #ccc; text-align: center;">O carrinho está vazio.</td>
      </tr>
    </tbody>
  </table>
  <div style="display: flex; justify-content: space-between; align-items: center;">
    <h2 style="margin: 0; color: #27ae60;">Total: R$ {{ total.toFixed(2) }}</h2>
    <button @click="finalizarVenda" style="padding: 12px 25px; background-color: #27ae60; color: white; border: none; border-radius: 4px; font-weight: bold; font-size: 16px; cursor: pointer;"> Finalizar Pagamento</button>
  </div>
  <div v-if="vendaFinalizada" style="margin-top: 15px; padding: 15px; background-color: #d4edda; color: #155724; border-radius: 4px; border: 1px solid #c3e6cb; text-align: center;">
    Venda finalizada com sucesso! Recibo gerado.
  </div>
</div>