import { TaskStatusEnum } from "@prisma/client"

export class UpdateTaskDto {
	title?: string
	description?: string
	status?: TaskStatusEnum
}