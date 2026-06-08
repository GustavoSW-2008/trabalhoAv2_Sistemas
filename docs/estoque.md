<script setup>
import { ref, computed } from 'vue'

const termoBusca = ref('')

const produtosBD = ref([
  { id: 'P-01', categoria: 'PC Montado', nome: 'PC Gamer RTX 4060', qtd: 3 },
  { id: 'P-02', categoria: 'Peça', nome: 'Memória RAM 16GB DDR5', qtd: 14 },
  { id: 'P-03', categoria: 'Peça', nome: 'SSD NVMe 1TB Kingston', qtd: 8 },
  { id: 'P-04', categoria: 'Periférico', nome: 'Headset HyperX Cloud', qtd: 5 }
])

const produtosFiltrados = computed(() => {
  return produtosBD.value.filter(p => p.nome.toLowerCase().includes(termoBusca.value.toLowerCase()) || p.id.toLowerCase().includes(termoBusca.value.toLowerCase()))
})

const acaoRealizada = (nome) => {
  alert(`Ação realizada para: ${nome}`)
}
</script>

# 📦 Estoque Central

Pesquise produtos disponíveis para venda ou peças para reposição.

<div style="margin-bottom: 20px;">
  <input v-model="termoBusca" type="text" placeholder="🔍 Buscar por nome ou ID do produto..." style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 6px; font-size: 16px;" />
</div>

<table style="width: 100%; border-collapse: collapse; text-align: left;">
  <thead>
    <tr style="background-color: #eee;">
      <th style="padding: 10px; border: 1px solid #ccc;">ID</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Categoria</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Produto</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Qtd</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Ação</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="produto in produtosFiltrados" :key="produto.id">
      <td style="padding: 10px; border: 1px solid #ccc;"><b>{{ produto.id }}</b></td>
      <td style="padding: 10px; border: 1px solid #ccc;">{{ produto.categoria }}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">{{ produto.nome }}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">
        <span :style="{ color: produto.qtd < 5 ? 'red' : 'green', fontWeight: 'bold' }">{{ produto.qtd }}</span>
      </td>
      <td style="padding: 10px; border: 1px solid #ccc;">
        <button @click="acaoRealizada(produto.nome)" style="padding: 5px 10px; background-color: #34495e; color: white; border: none; border-radius: 4px; cursor: pointer;">Requisitar</button>
      </td>
    </tr>
    <tr v-if="produtosFiltrados.length === 0">
      <td colspan="5" style="padding: 15px; text-align: center; border: 1px solid #ccc;">Nenhum produto encontrado.</td>
    </tr>
  </tbody>
</table>