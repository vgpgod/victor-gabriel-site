export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  const cleanedPhone = phone.replace(/\D/g, '');
  return cleanedPhone.length >= 10 && cleanedPhone.length <= 15;
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateRequired(formData.nome)) {
    errors.nome = 'Nome é obrigatório';
  }

  if (!validateRequired(formData.telefone)) {
    errors.telefone = 'Telefone é obrigatório';
  } else if (!validatePhone(formData.telefone)) {
    errors.telefone = 'Telefone inválido';
  }

  if (!validateRequired(formData.email)) {
    errors.email = 'E-mail é obrigatório';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'E-mail inválido';
  }

  if (!formData.interesse) {
    errors.interesse = 'Selecione uma opção de interesse';
  }

  if (!formData.consentimento) {
    errors.consentimento = 'Você deve aceitar a política de privacidade';
  }

  return errors;
};
