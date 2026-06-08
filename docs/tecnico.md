<script setup>
import { ref } from 'vue'

// Criando variáveis reativas para controlar a tela
const osStatus = ref('🟡 EM ANÁLISE')
const laudoTexto = ref('')
const mensagemSucesso = ref(false)

// Função para simular o salvamento do laudo
const salvarLaudo = () => {
  if (laudoTexto.value.trim() === '') {
    alert('Por favor, digite o diagnóstico antes de salvar.')
    return
  }
  
  // Exibe a mensagem de sucesso e esconde após 3 segundos
  mensagemSucesso.value = true
  setTimeout(() => {
    mensagemSucesso.value = false
  }, 3000)
}

const requisitarPeca = () => {
  alert('Redirecionando para o estoque para requisitar peça...')
  window.location.href = '/estoque'
}
</script>

# 🔧 Bancada de Manutenção

Gerencie as Ordens de Serviço (OS) em aberto, realize laudos e solicite peças.

---

## Fila de Diagnósticos

### OS #10293 - Cliente: João Silva

- **Equipamento:** Computador Desktop (Fonte Corsair 600W, Placa Mãe B550)
- **Problema Relatado:** Desliga sozinho ao jogar.
- **Status Atual:** **{{ osStatus }}**

<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 15px; border: 1px solid #ddd;">

<label style="font-weight: bold; display: block; margin-bottom: 5px;">Atualizar Status da OS:</label>
<select v-model="osStatus" style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px;">
<option value="🟡 EM ANÁLISE">🟡 EM ANÁLISE</option>
<option value="🟠 AGUARDANDO PEÇA DO ESTOQUE">🟠 AGUARDANDO PEÇA DO ESTOQUE</option>
<option value="🟢 CONCLUÍDA (Pronto para Retirada)">🟢 CONCLUÍDA (Pronto para Retirada)</option>
</select>

<label style="font-weight: bold; display: block; margin-bottom: 5px;">Laudo Técnico:</label>
<textarea
v-model="laudoTexto"
rows="4"
style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 4px;"
placeholder="Digite o diagnóstico detalhado aqui..."

> </textarea>

  <div style="display: flex; gap: 10px;">
    <button @click="salvarLaudo" style="padding: 10px 20px; background-color: #34495e; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
      💾 Salvar Laudo
    </button>
    
    <button @click="requisitarPeca" style="padding: 10px 20px; background-color: #e67e22; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
      📦 Requisitar Peça ao Estoque
    </button>
  </div>

  <div v-if="mensagemSucesso" style="margin-top: 15px; padding: 10px; background-color: #d4edda; color: #155724; border-radius: 4px; border: 1px solid #c3e6cb;">
    ✅ Laudo salvo com sucesso e status atualizado!
  </div>

</div>
