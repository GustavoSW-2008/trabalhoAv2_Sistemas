<script setup>
import { ref } from 'vue'

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const nome = ref('')
const mensagem = ref('')
const carregando = ref(false)

const handleSubmit = () => {
  carregando.value = true
  setTimeout(() => {
    carregando.value = false
    mensagem.value = isLogin.value ? 'Login efetuado com sucesso! Redirecionando...' : 'Cadastro realizado com sucesso!'
    email.value = ''
    password.value = ''
    nome.value = ''
  }, 1000)
}
</script>

# Acesso ao Sistema

Seja bem-vindo à TechPC. Faça seu login ou cadastre-se.

<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #ddd; max-width: 400px; margin-top: 20px;">
  <h2 style="margin-top: 0;">{{ isLogin ? 'Fazer Login' : 'Criar Conta' }}</h2>
  <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; gap: 15px;">
    <input v-if="!isLogin" v-model="nome" type="text" placeholder="Nome Completo" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
    <input v-model="email" type="email" placeholder="E-mail" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
    <input v-model="password" type="password" placeholder="Senha" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
    <button type="submit" :disabled="carregando" style="padding: 10px; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">
      {{ carregando ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Cadastrar') }}
    </button>
  </form>
  <button @click="isLogin = !isLogin; mensagem = ''" style="margin-top: 15px; background: none; border: none; color: #2980b9; cursor: pointer; text-decoration: underline;">
    {{ isLogin ? 'Novo por aqui? Cadastre-se' : 'Já tem conta? Faça Login' }}
  </button>
  <div v-if="mensagem" style="margin-top: 15px; padding: 10px; background-color: #d4edda; color: #155724; border-radius: 4px; border: 1px solid #c3e6cb;">
    {{ mensagem }}
  </div>
</div>