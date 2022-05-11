import { CrudProps } from '@modules/crud/infra/schemas/Crud.schema'

export type CreateProps = {
  content: string
}

export type FindByIdProps = {
  id: any
}

export type UpdateProps = {
  content: CrudProps
}

export type DeleteProps = {
  id: any
}

type ICrudProps = {
  create(data: CreateProps): Promise<CrudProps>
  findAll(): Promise<CrudProps[]>
  findById(data: FindByIdProps): Promise<CrudProps>
  update(data: UpdateProps): Promise<CrudProps>
  delete(data: DeleteProps): Promise<CrudProps>
}

export default ICrudProps
