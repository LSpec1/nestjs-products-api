import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Body, Res } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';

import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

// Controlador en donde manejaremos los endpoints
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createPost(
    @Res() res: any,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.createProduct(createProductDTO);
    res.status(HttpStatus.OK).json({
      message: 'Product Created',
      data: product,
    });
  }

  @Get('/')
  async getProducts(@Res() res: any) {
    const products = await this.productService.getProducts();
    res.status(HttpStatus.OK).json({
      data: products,
    });
  }
}
