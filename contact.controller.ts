// Author: Rogelio Morrell
// Creation date: 2024-05-17
// A nestjs controller for handling contact operations


import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Request } from 'express';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: AppService) {}

  @Post('/contacts')
  async create(@Body payload: any) {
    const result = await this.contactService.createContact(payload);

    
    return { id: result.id };
  }

  @Get('/contacts/:id')
  async read(@Param('id') id: string) {

    const result = await this.contactService.readContact(id);

    return result;
  }

  @Delete('/contacts/:id')
  async delete(@Param('id') id: string) {
    await this.contactService.deleteContact(id);
  }

  @Put('/contacts/:id')
  async update(@Param('id') id: string, @Body payload: any) {
    const result = await this.contactService.updateContact(id, payload);

    return result;
  }
}

