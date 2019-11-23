import vue from 'vue'
// import { AxiosInstance } from 'axios'
import { AxiosInstance } from 'node_modules/axios'

declare module 'vue/types/vue'{
  interface Vue {
    $http: AxiosInstance
  }
}