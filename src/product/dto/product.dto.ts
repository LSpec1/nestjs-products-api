import { Document } from 'mongoose';

// Data Transfer Object
export class CreateProductDTO extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly createAt: Date;
}
