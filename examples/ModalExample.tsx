import React, { useState } from 'react'
import { Modal, Button, Typography, Input, Textarea } from '../src'

export function ModalExample() {
  const [modals, setModals] = useState({
    small: false,
    medium: false,
    large: false,
    xl: false,
    form: false,
  })

  const openModal = (modal: string) => {
    setModals(prev => ({ ...prev, [modal]: true }))
  }

  const closeModal = (modal: string) => {
    setModals(prev => ({ ...prev, [modal]: false }))
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Modal Sizes</h2>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => openModal('small')}>Small Modal</Button>
          <Button onClick={() => openModal('medium')}>Medium Modal</Button>
          <Button onClick={() => openModal('large')}>Large Modal</Button>
          <Button onClick={() => openModal('xl')}>Extra Large Modal</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Form Modal</h2>
        <Button onClick={() => openModal('form')}>Open Form Modal</Button>
      </div>

      {/* Small Modal */}
      <Modal
        isOpen={modals.small}
        onClose={() => closeModal('small')}
        title="Small Modal"
        size="sm"
      >
        <Typography variant="body">
          This is a small modal with minimal content. Perfect for simple confirmations or alerts.
        </Typography>
        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="outline" onClick={() => closeModal('small')}>
            Cancel
          </Button>
          <Button onClick={() => closeModal('small')}>
            Confirm
          </Button>
        </div>
      </Modal>

      {/* Medium Modal */}
      <Modal
        isOpen={modals.medium}
        onClose={() => closeModal('medium')}
        title="Medium Modal"
        size="md"
      >
        <Typography variant="body" className="mb-4">
          This is a medium-sized modal. It's great for displaying more detailed information
          or simple forms that don't require too much space.
        </Typography>
        <Typography variant="body" color="secondary">
          You can include multiple paragraphs and even some interactive elements here.
        </Typography>
        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="outline" onClick={() => closeModal('medium')}>
            Cancel
          </Button>
          <Button onClick={() => closeModal('medium')}>
            Save Changes
          </Button>
        </div>
      </Modal>

      {/* Large Modal */}
      <Modal
        isOpen={modals.large}
        onClose={() => closeModal('large')}
        title="Large Modal"
        size="lg"
      >
        <div className="space-y-4">
          <Typography variant="body">
            This is a large modal that can accommodate more complex content. It's perfect for
            detailed forms, image galleries, or any content that needs more breathing room.
          </Typography>
          <div className="bg-gray-50 p-4 rounded-lg">
            <Typography variant="h6" className="mb-2">Additional Information</Typography>
            <Typography variant="body" color="secondary">
              You can include various types of content here, such as:
            </Typography>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
              <li>Lists and bullet points</li>
              <li>Code snippets</li>
              <li>Images and media</li>
              <li>Complex forms</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="outline" onClick={() => closeModal('large')}>
            Cancel
          </Button>
          <Button onClick={() => closeModal('large')}>
            Proceed
          </Button>
        </div>
      </Modal>

      {/* Extra Large Modal */}
      <Modal
        isOpen={modals.xl}
        onClose={() => closeModal('xl')}
        title="Extra Large Modal"
        size="xl"
      >
        <div className="space-y-6">
          <Typography variant="body">
            This is an extra large modal designed for maximum content display. It's ideal for:
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <Typography variant="h6" className="mb-2">Feature 1</Typography>
              <Typography variant="body" color="secondary">
                Detailed feature descriptions with plenty of space for comprehensive explanations.
              </Typography>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <Typography variant="h6" className="mb-2">Feature 2</Typography>
              <Typography variant="body" color="secondary">
                More detailed content that requires substantial space to display properly.
              </Typography>
            </div>
          </div>
          <Typography variant="body" color="secondary">
            This modal size is perfect for complex dashboards, detailed settings panels,
            or any interface that needs to display a lot of information at once.
          </Typography>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="outline" onClick={() => closeModal('xl')}>
            Cancel
          </Button>
          <Button onClick={() => closeModal('xl')}>
            Apply Changes
          </Button>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={modals.form}
        onClose={() => closeModal('form')}
        title="Create New Post"
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <Input placeholder="Enter post title" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content
            </label>
            <Textarea
              placeholder="Write your post content here..."
              rows={6}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <Input placeholder="Enter tags separated by commas" />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <Button variant="outline" onClick={() => closeModal('form')}>
            Cancel
          </Button>
          <Button onClick={() => closeModal('form')}>
            Publish Post
          </Button>
        </div>
      </Modal>
    </div>
  )
}
