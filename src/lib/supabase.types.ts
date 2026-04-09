import type { TaskType, RoutineFrequency, MoodBoardStatus, DayAbbr } from '@/types'

export type Task = {
  id: string
  user_id: string
  title: string
  type: TaskType
  done: boolean
  date: string | null
  created_at: string
}
export type TaskInsert = Omit<Task, 'id' | 'created_at'>
export type TaskUpdate = Partial<Omit<Task, 'id' | 'user_id' | 'created_at'>>

export type Project = {
  id: string
  user_id: string
  title: string
  notes: string | null
  notion_url: string | null
  created_at: string
}
export type ProjectInsert = Omit<Project, 'id' | 'created_at'>
export type ProjectUpdate = Partial<Omit<Project, 'id' | 'user_id' | 'created_at'>>

export type ProjectTask = {
  id: string
  project_id: string
  title: string
  done: boolean
  created_at: string
}
export type ProjectTaskInsert = Omit<ProjectTask, 'id' | 'created_at'>

export type RoutineItem = {
  id: string
  user_id: string
  title: string
  frequency: RoutineFrequency
  category: string | null
  custom_days: DayAbbr[] | null
  created_at: string
}
export type RoutineItemInsert = Omit<RoutineItem, 'id' | 'created_at'>
export type RoutineItemUpdate = Partial<Omit<RoutineItem, 'id' | 'user_id' | 'created_at'>>

export type RoutineLog = {
  id: string
  routine_item_id: string
  completed_at: string
}

export type MoodBoardCategory = {
  id: string
  user_id: string
  name: string
  created_at: string
}
export type MoodBoardCategoryInsert = Omit<MoodBoardCategory, 'id' | 'created_at'>

export type MoodBoardItem = {
  id: string
  user_id: string
  title: string
  category_id: string | null
  status: MoodBoardStatus
  created_at: string
}
export type MoodBoardItemInsert = Omit<MoodBoardItem, 'id' | 'created_at'>
export type MoodBoardItemUpdate = Partial<Omit<MoodBoardItem, 'id' | 'user_id' | 'created_at'>>

export type ThoughtSection = {
  id: string
  user_id: string
  name: string
  created_at: string
}
export type ThoughtSectionInsert = Omit<ThoughtSection, 'id' | 'created_at'>

export type Thought = {
  id: string
  user_id: string
  title: string
  content: string | null
  section_id: string | null
  created_at: string
}
export type ThoughtInsert = Omit<Thought, 'id' | 'created_at'>
export type ThoughtUpdate = Partial<Omit<Thought, 'id' | 'user_id' | 'created_at'>>

export type CalendarToken = {
  id: string
  user_id: string
  google_token: string
  created_at: string
}
