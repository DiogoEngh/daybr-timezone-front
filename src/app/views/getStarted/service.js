import {  apiService } from '../../service'

export const getGroups = () => {
    return fetch(`${apiService.modules}`)
}