import { api } from '@/shared/api/api'
import type { LoginDto, Admin } from '@/features/auth/types/auth.types'

export const me = async () => {
  const { data } = await api.get<Admin>('/auth/me')

  return data
}

export const login = async (dto: LoginDto) => {
  const { data } = await api.post('/auth/login', dto)

  return data
}

export const logout = async () => {
  const { data } = await api.post('/auth/logout')

  return data
}

export const refresh = async () => {
  const { data } = await api.post('/auth/refresh')

  return data
}