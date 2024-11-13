import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { CreateTaskDto } from "./dtos/create-task.dto"
import { Task } from "@prisma/client"
import { UpdateTaskDto } from "./dtos/update-task.dto"

@Controller("tasks")
export class TasksController {
	constructor(private readonly tasksService: TasksService) {
	}

	@Get()
	async getAllTasks(): Promise<Task[]> {
		return this.tasksService.getAllTasks()
	}

	@Post()
	async createOne(@Body() taskDto: CreateTaskDto): Promise<Task> {
		return this.tasksService.createOne(taskDto)
	}

	@Patch(":id")
	async updateOne(
		@Param("id", ParseIntPipe) id: number,
		@Body() dto: UpdateTaskDto
	): Promise<Task> {
		return this.tasksService.updateOne(id, dto)
	}

	@Delete(":id")
	async deleteOne(@Param("id", ParseIntPipe) id: number): Promise<Task> {
		return this.tasksService.deleteOne(id)
	}
}
