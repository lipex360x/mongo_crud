import Crud, { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'
import ICrud, { CreateProps, FindByIdProps, UpdateProps, DeleteProps } from '@modules/crud/repositories/interfaces/ICrud.interface'

export default class CrudRepository implements ICrud {
  async create ({ content }: CreateProps): Promise<CrudProps> {
    return Crud.create({ content })
  }

  async findAll (): Promise<CrudProps[]> {
    return Crud.find()
  }

  async findById ({ id }: FindByIdProps): Promise<CrudProps> {
    return Crud.findOne({ _id: { $ne: id } })
  }

  async update ({ content }: UpdateProps): Promise<CrudProps> {
    const id = content._id
    return Crud.findByIdAndUpdate(id, content, { new: true })
  }

  async delete ({ id }: DeleteProps): Promise<CrudProps> {
    return Crud.findByIdAndDelete(id)
  }
}
