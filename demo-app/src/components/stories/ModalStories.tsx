import React, { useState } from 'react';
import { Modal, Button, Card, Typography } from '@clear/ui';

export function ModalStories() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');

  const openModal = (size: 'sm' | 'md' | 'lg' | 'xl') => {
    setModalSize(size);
    setIsOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Sizes */}
      <Card variant="elevated" padding="lg">
        <Typography variant="h3" className="mb-4">Modal Sizes</Typography>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => openModal('sm')}>Small Modal</Button>
          <Button onClick={() => openModal('md')}>Medium Modal</Button>
          <Button onClick={() => openModal('lg')}>Large Modal</Button>
          <Button onClick={() => openModal('xl')}>Extra Large Modal</Button>
        </div>
      </Card>

      {/* Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={modalSize}>
        <div className="space-y-4">
          <Typography variant="h4">Modal Title</Typography>
          <Typography variant="body" color="secondary">
            This is a {modalSize} modal. You can close it by clicking the X button, 
            clicking outside the modal, or pressing the Escape key.
          </Typography>
          <div className="flex justify-end space-x-3 pt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
