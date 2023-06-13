import { defineStore } from 'pinia'
import axios from 'axios'

interface Dog {
  breed: string
  name: string
  gender: string
  age: number
  height: number
  weight: number
  shedding: number
  grooming: number
  coatLength: number
  playfulness: number
  protectiveness: number
  trainability: number
  energy: number
  barking: number
  goodWithChildren: number
  goodWithDogs: number
  goodWithStrangers: number
  description: string
}

export const useDogStore = defineStore('dogs', {
  state: () => ({
    dog: {} as Dog // Initialize dog property as null or modify the appropriate type
  }),
  actions: {
    async callGetDogs(this: ReturnType<typeof useDogStore>) {
      try {
        const { data } = await axios.get('http://localhost:3000/api/v1/dog')
        console.log(data)
        this.dog = data // Assign the value to this.dog
        console.log(this.dog, 'dog')
        return data
      } catch (error) {
        console.error(error)
      }
    }
  }
})
