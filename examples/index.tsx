import React from 'react'
import { ButtonExample } from './ButtonExample'
import { InputExample } from './InputExample'
import { TextareaExample } from './TextareaExample'
import { CardExample } from './CardExample'
import { AvatarExample } from './AvatarExample'
import { TypographyExample } from './TypographyExample'
import { ModalExample } from './ModalExample'
import { NavbarExample } from './NavbarExample'

export function Examples() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
            @clear/ui Component Library
          </h1>
          <p className="text-center text-gray-600 mb-12">
            A Neumorphism UI component library for social networks
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Components
            </h2>
            
            <div className="space-y-20">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Button</h3>
                <ButtonExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Input</h3>
                <InputExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Textarea</h3>
                <TextareaExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Card</h3>
                <CardExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Avatar</h3>
                <AvatarExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Typography</h3>
                <TypographyExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Modal</h3>
                <ModalExample />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Navbar</h3>
                <NavbarExample />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
