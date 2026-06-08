<script setup>
import { ref } from 'vue'

const showForm = ref(false)
const novoNome = ref('')
const novoCargo = ref('Vendedor')

const funcionarios = ref([
  { id: '001', nome: 'Carlos Souza', cargo: 'Vendedor', data: '10/01/2023' },
  { id: '002', nome: 'Mariana Luz', cargo: 'Técnica', data: '15/03/2023' }
])

const cadastrarFuncionario = () => {
  if (novoNome.value.trim() === '') return
  funcionarios.value.push({
    id: '00' + (funcionarios.value.length + 1),
    nome: novoNome.value,
    cargo: novoCargo.value,
    data: new Date().toLocaleDateString('pt-BR')
  })
  novoNome.value = ''
  showForm.value = false
}

const removerFuncionario = (index) => {
  funcionarios.value.splice(index, 1)
}
</script>

# Painel Administrativo (Gerência)

Visão geral da empresa e gestão de pessoal.

## Indicadores de Desempenho (Mês Atual)

<div style="display: flex; gap: 15px; margin-bottom: 30px;">
  <div style="flex: 1; padding: 20px; background-color: #e8f8f5; border-radius: 8px; border-left: 5px solid #1abc9c;">
    <h3 style="margin: 0; color: #16a085;">Faturamento</h3>
    <p style="font-size: 24px; font-weight: bold; margin: 10px 0 0 0;">R$ 45.320,00</p>
  </div>
  <div style="flex: 1; padding: 20px; background-color: #eaf2f8; border-radius: 8px; border-left: 5px solid #3498db;">
    <h3 style="margin: 0; color: #2980b9;">OS Concluídas</h3>
    <p style="font-size: 24px; font-weight: bold; margin: 10px 0 0 0;">32 Equipamentos</p>
  </div>
</div>

## Gestão de Funcionários

<button v-if="!showForm" @click="showForm = true" style="padding: 10px 15px; background-color: #2980b9; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 15px;">➕ Cadastrar Novo Funcionário</button>

<div v-if="showForm" style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin-bottom: 20px; display: flex; gap: 10px;">
  <input v-model="novoNome" type="text" placeholder="Nome do Funcionário" style="flex: 2; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  <select v-model="novoCargo" style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
    <option>Vendedor</option>
    <option>Técnico</option>
    <option>Gerente</option>
  </select>
  <button @click="cadastrarFuncionario" style="padding: 8px 15px; background-color: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Salvar</button>
  <button @click="showForm = false" style="padding: 8px 15px; background-color: #e74c3c; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancelar</button>
</div>

<table style="width: 100%; border-collapse: collapse; text-align: left;">
  <thead>
    <tr style="background-color: #eee;">
      <th style="padding: 10px; border: 1px solid #ccc;">ID</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Nome</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Cargo</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Admissão</th>
      <th style="padding: 10px; border: 1px solid #ccc;">Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(func, index) in funcionarios" :key="func.id">
      <td style="padding: 10px; border: 1px solid #ccc;">{{ func.id }}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">{{ func.nome }}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">{{ func.cargo }}</td>
      <td style="padding: 10px; border: 1px solid #ccc;">{{ func.data }}</td>
      <td style="padding: 10px; border: 1px solid #ccc;"><button @click="removerFuncionario(index)" style="color: red; background: none; border: none; cursor: pointer;"> Desligar</button></td>
    </tr>
  </tbody>
</table>