import { Injectable, NotFoundException } from "@nestjs/common"
import { Task } from "@prisma/client"
import { CreateTaskDto } from "./dtos/create-task.dto"
import { PrismaService } from "../../prisma/prisma.service"
import { UpdateTaskDto } from "./dtos/update-task.dto"

@Injectable()
export class TasksService {

	constructor(private readonly prismaService: PrismaService) {
	}

	async getAllTasks(): Promise<Task[]> {
		return this.prismaService.task.findMany()
	}

	async createOne(dto: CreateTaskDto): Promise<Task> {
		return this.prismaService.task.create({
			data: dto
		})
	}

	async updateOne(id: number, dto: UpdateTaskDto): Promise<Task> {
		await this.getOneOrThrow(id)
		return this.prismaService.task.update({
			data: dto,
			where: { id }
		})
	}

	async deleteOne(id: number): Promise<Task> {
		await this.getOneOrThrow(id)
		return this.prismaService.task.delete({ where: { id } })
	}

	private async getOneOrThrow(id: number): Promise<Task | NotFoundException> {
		const task = await this.prismaService.task.findUnique({ where: { id } })

		if (!task) {
			throw new NotFoundException(`Task with id ${id} not found`)
		}

		return task
	}

}
