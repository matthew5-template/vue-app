import request from '@/apis'

export const getHomepageJson = () => request.get('./homepage.json')
