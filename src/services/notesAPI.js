import axios from 'axios'

const API_URL = "https://aazfzczqwmsioscbgsqj.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhemZ6Y3pxd21zaW9zY2Jnc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NTU3NTAsImV4cCI6MjA5NjQzMTc1MH0.rD2m8k8Hp8p0bvALdfcINiOrL5vzu8SMuk75ytDl7qI"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}