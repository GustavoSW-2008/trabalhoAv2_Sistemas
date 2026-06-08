---
layout: home

hero:
  name: TechPC
  text: Loja e Assistência Técnica
  tagline: Compre PCs de alta performance ou acompanhe o conserto da sua máquina.
  actions:
    - theme: brand
      text: Ver Ofertas de PCs
      link: /estoque
    - theme: alt
      text: Abrir Ordem de Serviço
      link: /tecnico

features:
  - title: Loja de PCs e Peças
    details: Compre computadores já montados, periféricos ou peças avulsas.
  - title: Manutenção Especializada
    details: Acompanhe cada etapa do conserto do seu computador.
  - title: Acompanhamento Fácil
    details: Digite o número da sua OS abaixo para saber o status em tempo real.
---

<script setup>
import { ref } from 'vue'

const buscaOS = ref('')
const osEncontrada = ref(null)

// Simulador de banco de dados do cliente
const minhasOS = [
  { id: '10293', equipamento: 'PC Gamer Ninja', problema: 'Não dá vídeo ao ligar', status: 'EM ANÁLISE' },
  { id: '09882', equipamento: 'Notebook Dell', problema: 'Troca de bateria', status: 'CONCLUÍDA' }
]

const buscarStatus = () => {
  osEncontrada.value = minhasOS.find(os => os.id === buscaOS.value) || 'NAO_ENCONTRADA'
}
</script>

<div style="max-width: 800px; margin: 40px auto; padding: 20px; text-align: center; background-color: #f4f6f8; border-radius: 8px;">
  <h2>Rastrear Minha Manutenção</h2>
  <p>Digite o número da OS que está no seu recibo:</p>
  <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
    <input v-model="buscaOS" type="text" placeholder="Ex: 10293" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px; width: 200px;" />
    <button @click="buscarStatus" style="padding: 10px 20px; background-color: #2c3e50; color: white; border: none; border-radius: 4px; cursor: pointer;">Buscar</button>
  </div>
  <div v-if="osEncontrada && osEncontrada !== 'NAO_ENCONTRADA'" style="background-color: white; padding: 15px; border-radius: 8px; border: 1px solid #ddd; text-align: left;">
    <p><strong>OS:</strong> #{{ osEncontrada.id }}</p>
    <p><strong>Equipamento:</strong> {{ osEncontrada.equipamento }}</p>
    <p><strong>Status Atual:</strong> {{ osEncontrada.status }}</p>
  </div>
  <div v-if="osEncontrada === 'NAO_ENCONTRADA'" style="color: #c0392b;">
    Nenhuma Ordem de Serviço encontrada com este número.
  </div>
</div>