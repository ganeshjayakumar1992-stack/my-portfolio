import React, { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Mail, Phone, User, MessageSquare } from 'lucide-react'
import { CONTACT, FORM_CONFIG } from '../../constants/labels'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  description: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  description?: string
}

// Memoized Input Field Component for better performance
const InputField = memo(({ 
  field, 
  label, 
  placeholder, 
  type = 'text', 
  icon: Icon, 
  required = false,
  value,
  onChange,
  hasError,
  errorMessage
}: {
  field: keyof FormData
  label: string
  placeholder: string
  type?: string
  icon: React.ComponentType<{ className?: string }>
  required?: boolean
  value: string
  onChange: (field: keyof FormData, value: string) => void
  hasError: boolean
  errorMessage?: string
}) => (
  <div className="form-field">
    <label className="form-label">
      {Icon && <Icon className="w-4 h-4" />}
      {label}
      {required && <span className="required">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      placeholder={placeholder}
      className={`form-input ${hasError ? 'error' : ''}`}
      required={required}
    />
    {hasError && errorMessage && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="error-message"
      >
        {errorMessage}
      </motion.div>
    )}
  </div>
))

InputField.displayName = 'InputField'

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Memoized input change handler
  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error for this field only
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [errors])

  // Validation function
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = CONTACT.VALIDATION.FIRST_NAME_REQUIRED
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = CONTACT.VALIDATION.LAST_NAME_REQUIRED
    }

    if (!formData.email.trim()) {
      newErrors.email = CONTACT.VALIDATION.EMAIL_REQUIRED
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = CONTACT.VALIDATION.EMAIL_INVALID
    }

    if (!formData.description.trim()) {
      newErrors.description = CONTACT.VALIDATION.DESCRIPTION_REQUIRED
    } else if (formData.description.length < FORM_CONFIG.MIN_DESCRIPTION_LENGTH) {
      newErrors.description = `Description must be at least ${FORM_CONFIG.MIN_DESCRIPTION_LENGTH} characters`
    }

    if (formData.phone && !/^[+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = CONTACT.VALIDATION.PHONE_INVALID
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData])

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Create mailto link with form data
      const subject = `${FORM_CONFIG.SUBJECT_PREFIX}${formData.firstName} ${formData.lastName}`
      const body = `
Hello Ganesh,

I'd like to discuss the following:

${formData.description}

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
${formData.phone ? `- Phone: ${formData.phone}` : ''}

Best regards,
${formData.firstName} ${formData.lastName}
      `.trim()

      const mailtoUrl = `mailto:${FORM_CONFIG.EMAIL_SERVICE}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      // Open default email client
      window.location.href = mailtoUrl

      // Simulate success (in real app, you'd handle this differently)
      setTimeout(() => {
        setSubmitStatus('success')
        setIsSubmitting(false)
        // Reset form after success
        setTimeout(() => {
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            description: ''
          })
          setSubmitStatus('idle')
        }, 3000)
      }, 1000)

    } catch {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }, [formData, validateForm])

  // Success/Error messages
  const StatusMessage = useCallback(() => {
    if (submitStatus === 'success') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="status-message success"
        >
          <CheckCircle className="w-5 h-5" />
          <span>{CONTACT.SUCCESS_MESSAGE}</span>
        </motion.div>
      )
    }

    if (submitStatus === 'error') {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="status-message error"
        >
          <AlertCircle className="w-5 h-5" />
          <span>{CONTACT.ERROR_MESSAGE}</span>
        </motion.div>
      )
    }

    return null
  }, [submitStatus])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="contact-form-container"
    >
      <div className="contact-form-header">
        <h2 className="contact-form-title">{CONTACT.SECTION_TITLE}</h2>
        <p className="contact-form-subtitle">{CONTACT.SECTION_SUBTITLE}</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <InputField
            field="firstName"
            label={CONTACT.FORM.FIRST_NAME}
            placeholder="Enter your first name"
            icon={User}
            required
            value={formData.firstName}
            onChange={handleInputChange}
            hasError={!!errors.firstName}
            errorMessage={errors.firstName}
          />
          <InputField
            field="lastName"
            label={CONTACT.FORM.LAST_NAME}
            placeholder="Enter your last name"
            icon={User}
            required
            value={formData.lastName}
            onChange={handleInputChange}
            hasError={!!errors.lastName}
            errorMessage={errors.lastName}
          />
        </div>

        <div className="form-row">
          <InputField
            field="email"
            label={CONTACT.FORM.EMAIL}
            placeholder="Enter your email address"
            type="email"
            icon={Mail}
            required
            value={formData.email}
            onChange={handleInputChange}
            hasError={!!errors.email}
            errorMessage={errors.email}
          />
          <InputField
            field="phone"
            label={CONTACT.FORM.PHONE}
            placeholder="Enter your phone number (optional)"
            type="tel"
            icon={Phone}
            value={formData.phone}
            onChange={handleInputChange}
            hasError={!!errors.phone}
            errorMessage={errors.phone}
          />
        </div>

        <div className="form-field">
          <label className="form-label">
            <MessageSquare className="w-4 h-4" />
            {CONTACT.FORM.DESCRIPTION}
            <span className="required">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder="Tell me about your project, questions, or what you'd like to discuss..."
            className={`form-textarea ${errors.description ? 'error' : ''}`}
            rows={5}
            maxLength={FORM_CONFIG.MAX_DESCRIPTION_LENGTH}
            required
          />
          <div className="textarea-footer">
            {errors.description && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="error-message"
              >
                {errors.description}
              </motion.div>
            )}
            <span className="character-count">
              {formData.description.length}/{FORM_CONFIG.MAX_DESCRIPTION_LENGTH}
            </span>
          </div>
        </div>

        <StatusMessage />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="loading-spinner" />
              {CONTACT.FORM.SUBMIT_LOADING}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {CONTACT.FORM.SUBMIT_BUTTON}
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}
