interface HandleLoginSubmit {
  (csrfToken: string, formData: FormData): Promise<void>;
}

export const handleLoginSubmit: HandleLoginSubmit = async (csrfToken: string, formData: FormData) => {
  try {
    const response = await fetch(`http://localhost:8000/login/`, {
      method: 'POST',
      headers: {
        'X-CSRFToken': csrfToken,
      },
      body: formData,
      credentials: 'include',
    })
    const data = await response.json()
    if (data.success) {
      console.log(data)
    } 
  } catch (error) {
    console.error('Error logging in:', error)
  }
};