import { v4 as uuid } from 'uuid';
import validate from 'uuid-validate';
import { InvalidArgumentError } from './InvalidArgumentError';
import { ValueObject } from './ValueObject';

interface PropUuid {
  value: string;
}
export class Uuid extends ValueObject<PropUuid> {
  constructor(id: PropUuid) {
    super(id);
    this.ensureIsValidUuid(id.value); 
  }

  static random(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
}