export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      account_review_batches: {
        Row: {
          completed_at: string | null
          completed_count: number | null
          created_at: string | null
          created_by: string | null
          failed_count: number | null
          id: string
          name: string | null
          notification_sent: boolean | null
          notification_type: string | null
          requester_email: string | null
          requester_name: string | null
          started_at: string | null
          status: string | null
          total_companies: number
        }
        Insert: {
          completed_at?: string | null
          completed_count?: number | null
          created_at?: string | null
          created_by?: string | null
          failed_count?: number | null
          id?: string
          name?: string | null
          notification_sent?: boolean | null
          notification_type?: string | null
          requester_email?: string | null
          requester_name?: string | null
          started_at?: string | null
          status?: string | null
          total_companies: number
        }
        Update: {
          completed_at?: string | null
          completed_count?: number | null
          created_at?: string | null
          created_by?: string | null
          failed_count?: number | null
          id?: string
          name?: string | null
          notification_sent?: boolean | null
          notification_type?: string | null
          requester_email?: string | null
          requester_name?: string | null
          started_at?: string | null
          status?: string | null
          total_companies?: number
        }
        Relationships: []
      }
      account_review_queue: {
        Row: {
          batch_id: string | null
          company_id: number
          completed_at: string | null
          contact_id: number | null
          created_at: string | null
          created_by: string | null
          error_message: string | null
          id: number
          max_retries: number | null
          priority: number | null
          requester_email: string | null
          requester_name: string | null
          retry_count: number | null
          review_scope: string
          run_id: number | null
          scheduled_at: string | null
          started_at: string | null
          status: string
          user_id: number | null
        }
        Insert: {
          batch_id?: string | null
          company_id: number
          completed_at?: string | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          id?: number
          max_retries?: number | null
          priority?: number | null
          requester_email?: string | null
          requester_name?: string | null
          retry_count?: number | null
          review_scope: string
          run_id?: number | null
          scheduled_at?: string | null
          started_at?: string | null
          status?: string
          user_id?: number | null
        }
        Update: {
          batch_id?: string | null
          company_id?: number
          completed_at?: string | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          id?: number
          max_retries?: number | null
          priority?: number | null
          requester_email?: string | null
          requester_name?: string | null
          retry_count?: number | null
          review_scope?: string
          run_id?: number | null
          scheduled_at?: string | null
          started_at?: string | null
          status?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "account_review_queue_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_review_queue_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_review_queue_run_id_fkey"
            columns: ["run_id"]
            isOneToOne: false
            referencedRelation: "account_review_runs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_review_queue_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "ibisusers"
            referencedColumns: ["id"]
          },
        ]
      }
      account_review_runs: {
        Row: {
          auto_create_tasks: boolean | null
          batch_id: string | null
          company_id: number
          completed_at: string | null
          contact_id: number | null
          created_at: string | null
          created_by: string | null
          engagement_outcome: string | null
          error_message: string | null
          execution_time_ms: number | null
          findings_json: Json | null
          id: number
          interaction_id: number | null
          mode: string
          period_end: string
          period_start: string
          report_s3_key: string | null
          review_scope: string
          status: string
          summary_json: Json | null
          tasks_created: number[] | null
          tasks_json: Json | null
          tool_calls_count: number | null
          user_id: number | null
        }
        Insert: {
          auto_create_tasks?: boolean | null
          batch_id?: string | null
          company_id: number
          completed_at?: string | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          engagement_outcome?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          findings_json?: Json | null
          id?: number
          interaction_id?: number | null
          mode: string
          period_end: string
          period_start: string
          report_s3_key?: string | null
          review_scope?: string
          status?: string
          summary_json?: Json | null
          tasks_created?: number[] | null
          tasks_json?: Json | null
          tool_calls_count?: number | null
          user_id?: number | null
        }
        Update: {
          auto_create_tasks?: boolean | null
          batch_id?: string | null
          company_id?: number
          completed_at?: string | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          engagement_outcome?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          findings_json?: Json | null
          id?: number
          interaction_id?: number | null
          mode?: string
          period_end?: string
          period_start?: string
          report_s3_key?: string | null
          review_scope?: string
          status?: string
          summary_json?: Json | null
          tasks_created?: number[] | null
          tasks_json?: Json | null
          tool_calls_count?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "account_review_runs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_review_runs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "account_review_runs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "account_review_runs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "account_review_runs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "ibisusers"
            referencedColumns: ["id"]
          },
        ]
      }
      account_review_schedules: {
        Row: {
          company_id: number
          created_at: string | null
          created_by: string | null
          day_of_month: number | null
          id: number
          is_active: boolean | null
          last_run_at: string | null
          next_run_at: string | null
          schedule_type: string
          updated_at: string | null
        }
        Insert: {
          company_id: number
          created_at?: string | null
          created_by?: string | null
          day_of_month?: number | null
          id?: number
          is_active?: boolean | null
          last_run_at?: string | null
          next_run_at?: string | null
          schedule_type: string
          updated_at?: string | null
        }
        Update: {
          company_id?: number
          created_at?: string | null
          created_by?: string | null
          day_of_month?: number | null
          id?: number
          is_active?: boolean | null
          last_run_at?: string | null
          next_run_at?: string | null
          schedule_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "account_review_schedules_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      action_ids: {
        Row: {
          array_agg: number[] | null
        }
        Insert: {
          array_agg?: number[] | null
        }
        Update: {
          array_agg?: number[] | null
        }
        Relationships: []
      }
      actions: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      ai_agent_prompt_versions: {
        Row: {
          agent_id: number
          change_note: string | null
          created_at: string | null
          created_by: string | null
          id: number
          prompt: string
          version_number: number
        }
        Insert: {
          agent_id: number
          change_note?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          prompt: string
          version_number: number
        }
        Update: {
          agent_id?: number
          change_note?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: number
          prompt?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "ai_agent_prompt_versions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_agent_prompt_versions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "ai_agent_prompt_versions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      ai_agent_run_logs: {
        Row: {
          agent_id: number
          created_at: string | null
          created_by: string | null
          error_message: string | null
          execution_time_ms: number | null
          id: number
          input_json: Json
          output_json: Json | null
          run_mode: string | null
          status: string | null
          tool_calls_json: Json | null
        }
        Insert: {
          agent_id: number
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          id?: number
          input_json: Json
          output_json?: Json | null
          run_mode?: string | null
          status?: string | null
          tool_calls_json?: Json | null
        }
        Update: {
          agent_id?: number
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          id?: number
          input_json?: Json
          output_json?: Json | null
          run_mode?: string | null
          status?: string | null
          tool_calls_json?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agent_run_logs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_agent_run_logs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "ai_agent_run_logs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      ai_agents: {
        Row: {
          agent_code: string
          created_at: string | null
          created_by: string | null
          current_prompt: string
          description: string | null
          id: number
          is_active: boolean | null
          name: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          agent_code: string
          created_at?: string | null
          created_by?: string | null
          current_prompt: string
          description?: string | null
          id?: number
          is_active?: boolean | null
          name: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          agent_code?: string
          created_at?: string | null
          created_by?: string | null
          current_prompt?: string
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "ai_agents_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "ai_agents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "ai_agents_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      allowed_domains: {
        Row: {
          company_id: number
          created_at: string | null
          created_by: string | null
          domain: string
          id: number
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          company_id: number
          created_at?: string | null
          created_by?: string | null
          domain: string
          id?: number
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          company_id?: number
          created_at?: string | null
          created_by?: string | null
          domain?: string
          id?: number
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "allowed_domains_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      analysesubscription_logs: {
        Row: {
          analysesubscription_id: number
          change_type: string
          changed_fields: string[] | null
          description: string
          id: number
          meta: Json | null
          new_values: Json | null
          old_values: Json | null
          performed_at: string | null
          performed_by: string | null
          subscription_id: number | null
        }
        Insert: {
          analysesubscription_id: number
          change_type: string
          changed_fields?: string[] | null
          description: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number | null
        }
        Update: {
          analysesubscription_id?: number
          change_type?: string
          changed_fields?: string[] | null
          description?: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "analysesubscription_logs_analysesubscription_id_fkey"
            columns: ["analysesubscription_id"]
            isOneToOne: false
            referencedRelation: "analysesubscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysesubscription_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      analysesubscriptions: {
        Row: {
          analytic_ids: number[] | null
          created: string
          created_by: string | null
          end_date: string
          extended_date: string | null
          id: number
          order_id: number | null
          pack_id: number
          start_date: string
          status: string
          subscribed_company: number
          subscription_id: number
          syn_id: number | null
          updated_by: string | null
          updated_on: string | null
        }
        Insert: {
          analytic_ids?: number[] | null
          created: string
          created_by?: string | null
          end_date: string
          extended_date?: string | null
          id: number
          order_id?: number | null
          pack_id: number
          start_date: string
          status: string
          subscribed_company: number
          subscription_id: number
          syn_id?: number | null
          updated_by?: string | null
          updated_on?: string | null
        }
        Update: {
          analytic_ids?: number[] | null
          created?: string
          created_by?: string | null
          end_date?: string
          extended_date?: string | null
          id?: number
          order_id?: number | null
          pack_id?: number
          start_date?: string
          status?: string
          subscribed_company?: number
          subscription_id?: number
          syn_id?: number | null
          updated_by?: string | null
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analysesubscriptions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "analysesubscriptions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "analysesubscriptions_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "analyticpacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysesubscriptions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analysesubscriptions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "analysesubscriptions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      analyticpackdetails: {
        Row: {
          content_id: number
          id: number
          package_id: number
        }
        Insert: {
          content_id: number
          id: number
          package_id: number
        }
        Update: {
          content_id?: number
          id?: number
          package_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "analyticpackdetails_content_id_fkey"
            columns: ["content_id"]
            isOneToOne: false
            referencedRelation: "contentsets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analyticpackdetails_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "analyticpacks"
            referencedColumns: ["id"]
          },
        ]
      }
      analyticpacks: {
        Row: {
          conditions: string | null
          country_pack: boolean
          description: string | null
          id: number
          is_custom: boolean
          name: string
          pack_price: number | null
          s3_image_url: string | null
          sector_pack: boolean
          short_description: string | null
          status: string
          summary: string | null
          why_buy_one: string | null
          why_buy_two: string | null
          zones: number[] | null
        }
        Insert: {
          conditions?: string | null
          country_pack: boolean
          description?: string | null
          id: number
          is_custom: boolean
          name: string
          pack_price?: number | null
          s3_image_url?: string | null
          sector_pack: boolean
          short_description?: string | null
          status: string
          summary?: string | null
          why_buy_one?: string | null
          why_buy_two?: string | null
          zones?: number[] | null
        }
        Update: {
          conditions?: string | null
          country_pack?: boolean
          description?: string | null
          id?: number
          is_custom?: boolean
          name?: string
          pack_price?: number | null
          s3_image_url?: string | null
          sector_pack?: boolean
          short_description?: string | null
          status?: string
          summary?: string | null
          why_buy_one?: string | null
          why_buy_two?: string | null
          zones?: number[] | null
        }
        Relationships: []
      }
      analytics_pack_price_discount: {
        Row: {
          add_on_price: number
          analytics_package_id: number | null
          analytics_package_name: string | null
          annual_price: number
          created_by: string | null
          created_on: string
          ibis_pack_id: number | null
          ibis_pack_name: string | null
          id: number
          multi_pack_discount: number
          standalone_discount: number
          status: string
          subscribed_company: number
          total_items: number
          updated_by: string | null
          updated_on: string
        }
        Insert: {
          add_on_price?: number
          analytics_package_id?: number | null
          analytics_package_name?: string | null
          annual_price?: number
          created_by?: string | null
          created_on?: string
          ibis_pack_id?: number | null
          ibis_pack_name?: string | null
          id?: number
          multi_pack_discount?: number
          standalone_discount?: number
          status?: string
          subscribed_company?: number
          total_items?: number
          updated_by?: string | null
          updated_on?: string
        }
        Update: {
          add_on_price?: number
          analytics_package_id?: number | null
          analytics_package_name?: string | null
          annual_price?: number
          created_by?: string | null
          created_on?: string
          ibis_pack_id?: number | null
          ibis_pack_name?: string | null
          id?: number
          multi_pack_discount?: number
          standalone_discount?: number
          status?: string
          subscribed_company?: number
          total_items?: number
          updated_by?: string | null
          updated_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_pack_price_discount_analytics_package_id_fkey"
            columns: ["analytics_package_id"]
            isOneToOne: false
            referencedRelation: "analyticpacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "analytics_pack_price_discount_ibis_pack_id_fkey"
            columns: ["ibis_pack_id"]
            isOneToOne: false
            referencedRelation: "ibispacks"
            referencedColumns: ["id"]
          },
        ]
      }
      api_config: {
        Row: {
          auth_base_url: string
          auth_path: string | null
          created_at: string | null
          crm_base_url: string
          environment: string
          ibis_base_url: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          auth_base_url: string
          auth_path?: string | null
          created_at?: string | null
          crm_base_url: string
          environment: string
          ibis_base_url?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          auth_base_url?: string
          auth_path?: string | null
          created_at?: string | null
          crm_base_url?: string
          environment?: string
          ibis_base_url?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      api_error_logs: {
        Row: {
          action: string | null
          created_at: string | null
          environment: string | null
          error_message: string
          error_type: string
          function_name: string
          id: number
          request_payload: Json | null
          response_payload: Json | null
          user_id: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          environment?: string | null
          error_message: string
          error_type: string
          function_name: string
          id?: number
          request_payload?: Json | null
          response_payload?: Json | null
          user_id?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          environment?: string | null
          error_message?: string
          error_type?: string
          function_name?: string
          id?: number
          request_payload?: Json | null
          response_payload?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      api_tokens: {
        Row: {
          created_at: string | null
          environment: string
          expiry: string | null
          id: number
          token: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          environment: string
          expiry?: string | null
          id?: number
          token: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          environment?: string
          expiry?: string | null
          id?: number
          token?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      approved_emails: {
        Row: {
          created_at: string | null
          email: string
          id: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
        }
        Relationships: []
      }
      awsdms_apply_exceptions: {
        Row: {
          ERROR: string
          ERROR_TIME: string
          STATEMENT: string
          TABLE_NAME: string
          TABLE_OWNER: string
          TASK_NAME: string
        }
        Insert: {
          ERROR: string
          ERROR_TIME: string
          STATEMENT: string
          TABLE_NAME: string
          TABLE_OWNER: string
          TASK_NAME: string
        }
        Update: {
          ERROR?: string
          ERROR_TIME?: string
          STATEMENT?: string
          TABLE_NAME?: string
          TABLE_OWNER?: string
          TASK_NAME?: string
        }
        Relationships: []
      }
      awsdms_txn_state: {
        Row: {
          CHECKPOINT: string
          SERVER_NAME: string
          STATE_TIME: string
          TASK_NAME: string
        }
        Insert: {
          CHECKPOINT: string
          SERVER_NAME: string
          STATE_TIME: string
          TASK_NAME: string
        }
        Update: {
          CHECKPOINT?: string
          SERVER_NAME?: string
          STATE_TIME?: string
          TASK_NAME?: string
        }
        Relationships: []
      }
      blaze_integrations: {
        Row: {
          api_key_encrypted: string
          created_at: string | null
          created_by: string | null
          enabled_platforms: string[] | null
          id: number
          is_active: boolean | null
          last_sync_at: string | null
          product_id: number
          settings: Json | null
          updated_at: string | null
          updated_by: string | null
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          api_key_encrypted: string
          created_at?: string | null
          created_by?: string | null
          enabled_platforms?: string[] | null
          id?: never
          is_active?: boolean | null
          last_sync_at?: string | null
          product_id: number
          settings?: Json | null
          updated_at?: string | null
          updated_by?: string | null
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          api_key_encrypted?: string
          created_at?: string | null
          created_by?: string | null
          enabled_platforms?: string[] | null
          id?: never
          is_active?: boolean | null
          last_sync_at?: string | null
          product_id?: number
          settings?: Json | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blaze_integrations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      blaze_posts: {
        Row: {
          blaze_metadata: Json | null
          blaze_post_id: string
          content: string
          created_at: string | null
          created_by: string | null
          engagement_metrics: Json | null
          error_message: string | null
          id: number
          media_urls: Json | null
          platform: string
          product_id: number
          published_at: string | null
          scheduled_at: string | null
          status: string
          subcampaign_id: number
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          blaze_metadata?: Json | null
          blaze_post_id: string
          content: string
          created_at?: string | null
          created_by?: string | null
          engagement_metrics?: Json | null
          error_message?: string | null
          id?: never
          media_urls?: Json | null
          platform: string
          product_id: number
          published_at?: string | null
          scheduled_at?: string | null
          status?: string
          subcampaign_id: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          blaze_metadata?: Json | null
          blaze_post_id?: string
          content?: string
          created_at?: string | null
          created_by?: string | null
          engagement_metrics?: Json | null
          error_message?: string | null
          id?: never
          media_urls?: Json | null
          platform?: string
          product_id?: number
          published_at?: string | null
          scheduled_at?: string | null
          status?: string
          subcampaign_id?: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blaze_posts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blaze_posts_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      blocked_domains: {
        Row: {
          created_at: string | null
          created_by: string | null
          domain: string
          id: number
          status: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          domain: string
          id?: number
          status?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          domain?: string
          id?: number
          status?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blocked_domains_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "blocked_domains_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "blocked_domains_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "blocked_domains_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      bulletin_bulletin: {
        Row: {
          bulletin_date: string | null
          bulletin_number: number | null
          channeluniqueid: string | null
          created_by_id: number | null
          created_on: string | null
          email_sent_status: string | null
          id: number
          mailinglist_id: number | null
          published_by_id: number | null
          published_on: string | null
          s3_url: string | null
          scheduled_on: string | null
          subscribed_company: number
          title: string | null
          updated_by_id: number | null
          updated_on: string | null
          utm_content: string | null
        }
        Insert: {
          bulletin_date?: string | null
          bulletin_number?: number | null
          channeluniqueid?: string | null
          created_by_id?: number | null
          created_on?: string | null
          email_sent_status?: string | null
          id: number
          mailinglist_id?: number | null
          published_by_id?: number | null
          published_on?: string | null
          s3_url?: string | null
          scheduled_on?: string | null
          subscribed_company: number
          title?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
          utm_content?: string | null
        }
        Update: {
          bulletin_date?: string | null
          bulletin_number?: number | null
          channeluniqueid?: string | null
          created_by_id?: number | null
          created_on?: string | null
          email_sent_status?: string | null
          id?: number
          mailinglist_id?: number | null
          published_by_id?: number | null
          published_on?: string | null
          s3_url?: string | null
          scheduled_on?: string | null
          subscribed_company?: number
          title?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
          utm_content?: string | null
        }
        Relationships: []
      }
      bulletin_events: {
        Row: {
          bulletin_id: number
          created_at: string
          event_type: string
          id: number
          ip_address: unknown
          meta: Json | null
          occurred_at: string
          send_id: number
          to_email: string
          url: string | null
          user_agent: string | null
        }
        Insert: {
          bulletin_id: number
          created_at?: string
          event_type: string
          id?: number
          ip_address?: unknown
          meta?: Json | null
          occurred_at?: string
          send_id: number
          to_email: string
          url?: string | null
          user_agent?: string | null
        }
        Update: {
          bulletin_id?: number
          created_at?: string
          event_type?: string
          id?: number
          ip_address?: unknown
          meta?: Json | null
          occurred_at?: string
          send_id?: number
          to_email?: string
          url?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bulletin_events_bulletin_id_fkey"
            columns: ["bulletin_id"]
            isOneToOne: false
            referencedRelation: "bulletin_bulletin"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bulletin_events_send_id_fkey"
            columns: ["send_id"]
            isOneToOne: false
            referencedRelation: "bulletin_sends"
            referencedColumns: ["id"]
          },
        ]
      }
      bulletin_mailinglist: {
        Row: {
          created_on: string
          email_id: string
          id: number
          mailinglist_type_id: number
          status: string
          syn_id: number | null
          unique_id: string | null
          updated_on: string
        }
        Insert: {
          created_on: string
          email_id: string
          id: number
          mailinglist_type_id: number
          status: string
          syn_id?: number | null
          unique_id?: string | null
          updated_on: string
        }
        Update: {
          created_on?: string
          email_id?: string
          id?: number
          mailinglist_type_id?: number
          status?: string
          syn_id?: number | null
          unique_id?: string | null
          updated_on?: string
        }
        Relationships: []
      }
      bulletin_mailinglisttype: {
        Row: {
          created_by: number | null
          created_on: string
          description: string | null
          id: number
          mailinglist_identifier: string | null
          mailinglist_sender_address: string | null
          mailinglist_sender_name: string | null
          mailinglisttypefor: string | null
          name: string
          status: string
          subscribed_company: number
          syn_id: number | null
          unique_key: string | null
        }
        Insert: {
          created_by?: number | null
          created_on: string
          description?: string | null
          id: number
          mailinglist_identifier?: string | null
          mailinglist_sender_address?: string | null
          mailinglist_sender_name?: string | null
          mailinglisttypefor?: string | null
          name: string
          status: string
          subscribed_company: number
          syn_id?: number | null
          unique_key?: string | null
        }
        Update: {
          created_by?: number | null
          created_on?: string
          description?: string | null
          id?: number
          mailinglist_identifier?: string | null
          mailinglist_sender_address?: string | null
          mailinglist_sender_name?: string | null
          mailinglisttypefor?: string | null
          name?: string
          status?: string
          subscribed_company?: number
          syn_id?: number | null
          unique_key?: string | null
        }
        Relationships: []
      }
      bulletin_news: {
        Row: {
          added_on: string | null
          arabic_desc: string | null
          classification: string | null
          content_type_id: number | null
          country: string | null
          created_by_id: number | null
          created_on: string | null
          description: string | null
          exclusive_news: boolean | null
          id: number
          image_text: number
          image_type: string | null
          industry: string | null
          landing_page: string | null
          last_updated_on: string
          news_city: string | null
          news_link: string | null
          news_zone_id: number | null
          notes: string | null
          project_id: number | null
          project_type: string | null
          publisher_id: number | null
          s3_image_url: string | null
          sector: string | null
          short_description: string | null
          slug: string | null
          subscribed_company: number
          subtitle: string | null
          syn_id: number | null
          title: string | null
          tweet: string | null
          type_id: number | null
          type_name: string | null
          type_status: string | null
          updated_by_id: number | null
          updated_on: string | null
          visibility: string | null
          writer_id: number | null
          writer_name: string | null
        }
        Insert: {
          added_on?: string | null
          arabic_desc?: string | null
          classification?: string | null
          content_type_id?: number | null
          country?: string | null
          created_by_id?: number | null
          created_on?: string | null
          description?: string | null
          exclusive_news?: boolean | null
          id: number
          image_text: number
          image_type?: string | null
          industry?: string | null
          landing_page?: string | null
          last_updated_on: string
          news_city?: string | null
          news_link?: string | null
          news_zone_id?: number | null
          notes?: string | null
          project_id?: number | null
          project_type?: string | null
          publisher_id?: number | null
          s3_image_url?: string | null
          sector?: string | null
          short_description?: string | null
          slug?: string | null
          subscribed_company: number
          subtitle?: string | null
          syn_id?: number | null
          title?: string | null
          tweet?: string | null
          type_id?: number | null
          type_name?: string | null
          type_status?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
          visibility?: string | null
          writer_id?: number | null
          writer_name?: string | null
        }
        Update: {
          added_on?: string | null
          arabic_desc?: string | null
          classification?: string | null
          content_type_id?: number | null
          country?: string | null
          created_by_id?: number | null
          created_on?: string | null
          description?: string | null
          exclusive_news?: boolean | null
          id?: number
          image_text?: number
          image_type?: string | null
          industry?: string | null
          landing_page?: string | null
          last_updated_on?: string
          news_city?: string | null
          news_link?: string | null
          news_zone_id?: number | null
          notes?: string | null
          project_id?: number | null
          project_type?: string | null
          publisher_id?: number | null
          s3_image_url?: string | null
          sector?: string | null
          short_description?: string | null
          slug?: string | null
          subscribed_company?: number
          subtitle?: string | null
          syn_id?: number | null
          title?: string | null
          tweet?: string | null
          type_id?: number | null
          type_name?: string | null
          type_status?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
          visibility?: string | null
          writer_id?: number | null
          writer_name?: string | null
        }
        Relationships: []
      }
      bulletin_news_clicks: {
        Row: {
          bulletin_id: number
          clicked_at: string
          created_at: string
          id: number
          ip_address: unknown
          news_id: number
          send_id: number
          to_email: string
          url: string | null
          user_agent: string | null
        }
        Insert: {
          bulletin_id: number
          clicked_at?: string
          created_at?: string
          id?: number
          ip_address?: unknown
          news_id: number
          send_id: number
          to_email: string
          url?: string | null
          user_agent?: string | null
        }
        Update: {
          bulletin_id?: number
          clicked_at?: string
          created_at?: string
          id?: number
          ip_address?: unknown
          news_id?: number
          send_id?: number
          to_email?: string
          url?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bulletin_news_clicks_send_id_fkey"
            columns: ["send_id"]
            isOneToOne: false
            referencedRelation: "bulletin_sends"
            referencedColumns: ["id"]
          },
        ]
      }
      bulletin_send_batches: {
        Row: {
          bulletin_id: number
          completed_at: string | null
          created_at: string
          failed_count: number
          id: number
          sent_count: number
          started_at: string | null
          status: string
          total_recipients: number
          updated_at: string
        }
        Insert: {
          bulletin_id: number
          completed_at?: string | null
          created_at?: string
          failed_count?: number
          id?: number
          sent_count?: number
          started_at?: string | null
          status?: string
          total_recipients?: number
          updated_at?: string
        }
        Update: {
          bulletin_id?: number
          completed_at?: string | null
          created_at?: string
          failed_count?: number
          id?: number
          sent_count?: number
          started_at?: string | null
          status?: string
          total_recipients?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bulletin_send_batches_bulletin_id_fkey"
            columns: ["bulletin_id"]
            isOneToOne: false
            referencedRelation: "bulletin_bulletin"
            referencedColumns: ["id"]
          },
        ]
      }
      bulletin_sends: {
        Row: {
          batch_id: number | null
          bounce_type: string | null
          bulletin_id: number
          click_count: number
          created_at: string
          delivered_at: string | null
          error: string | null
          first_clicked_at: string | null
          first_opened_at: string | null
          id: number
          mailinglist_id: number | null
          open_count: number
          queued_at: string
          sent_at: string | null
          ses_message_id: string | null
          status: string
          to_email: string
          updated_at: string
        }
        Insert: {
          batch_id?: number | null
          bounce_type?: string | null
          bulletin_id: number
          click_count?: number
          created_at?: string
          delivered_at?: string | null
          error?: string | null
          first_clicked_at?: string | null
          first_opened_at?: string | null
          id?: number
          mailinglist_id?: number | null
          open_count?: number
          queued_at?: string
          sent_at?: string | null
          ses_message_id?: string | null
          status?: string
          to_email: string
          updated_at?: string
        }
        Update: {
          batch_id?: number | null
          bounce_type?: string | null
          bulletin_id?: number
          click_count?: number
          created_at?: string
          delivered_at?: string | null
          error?: string | null
          first_clicked_at?: string | null
          first_opened_at?: string | null
          id?: number
          mailinglist_id?: number | null
          open_count?: number
          queued_at?: string
          sent_at?: string | null
          ses_message_id?: string | null
          status?: string
          to_email?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bulletin_sends_batch_id_fkey"
            columns: ["batch_id"]
            isOneToOne: false
            referencedRelation: "bulletin_send_batches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bulletin_sends_bulletin_id_fkey"
            columns: ["bulletin_id"]
            isOneToOne: false
            referencedRelation: "bulletin_bulletin"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_collections: {
        Row: {
          color: string
          created_at: string
          created_by: string | null
          description: string | null
          id: number
          is_default: boolean
          name: string
          owner_id: string
          product_id: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          color?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: number
          is_default?: boolean
          name: string
          owner_id: string
          product_id: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          color?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: number
          is_default?: boolean
          name?: string
          owner_id?: string
          product_id?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_collections_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_collections_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_collections_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_collections_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_collections_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_collections_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      calendar_events: {
        Row: {
          all_day: boolean
          attendees: Json | null
          calendar_collection_id: number
          conference_data: Json | null
          created_at: string
          created_by: string | null
          description: string | null
          end_date: string | null
          event_type: Database["public"]["Enums"]["calendar_event_type"]
          id: number
          last_sync_attempt: string | null
          location: string | null
          metadata: Json | null
          owner_id: string
          product_id: number
          start_date: string
          status: Database["public"]["Enums"]["calendar_event_status"]
          sync_error: string | null
          sync_status: string | null
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          all_day?: boolean
          attendees?: Json | null
          calendar_collection_id: number
          conference_data?: Json | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          event_type?: Database["public"]["Enums"]["calendar_event_type"]
          id?: number
          last_sync_attempt?: string | null
          location?: string | null
          metadata?: Json | null
          owner_id: string
          product_id: number
          start_date: string
          status?: Database["public"]["Enums"]["calendar_event_status"]
          sync_error?: string | null
          sync_status?: string | null
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          all_day?: boolean
          attendees?: Json | null
          calendar_collection_id?: number
          conference_data?: Json | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          event_type?: Database["public"]["Enums"]["calendar_event_type"]
          id?: number
          last_sync_attempt?: string | null
          location?: string | null
          metadata?: Json | null
          owner_id?: string
          product_id?: number
          start_date?: string
          status?: Database["public"]["Enums"]["calendar_event_status"]
          sync_error?: string | null
          sync_status?: string | null
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_events_calendar_collection_id_fkey"
            columns: ["calendar_collection_id"]
            isOneToOne: false
            referencedRelation: "calendar_collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_events_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_events_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_events_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_events_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      calendar_integrations: {
        Row: {
          auto_generate_meet_link: boolean | null
          calendar_collection_id: number
          created_at: string
          created_by: string | null
          external_calendar_id: string
          external_calendar_name: string
          id: number
          last_sync_at: string | null
          provider: Database["public"]["Enums"]["integration_provider"]
          status: Database["public"]["Enums"]["sync_status"]
          sync_interval_minutes: number
          sync_mode: Database["public"]["Enums"]["sync_mode"]
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          auto_generate_meet_link?: boolean | null
          calendar_collection_id: number
          created_at?: string
          created_by?: string | null
          external_calendar_id: string
          external_calendar_name: string
          id?: never
          last_sync_at?: string | null
          provider?: Database["public"]["Enums"]["integration_provider"]
          status?: Database["public"]["Enums"]["sync_status"]
          sync_interval_minutes?: number
          sync_mode?: Database["public"]["Enums"]["sync_mode"]
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          auto_generate_meet_link?: boolean | null
          calendar_collection_id?: number
          created_at?: string
          created_by?: string | null
          external_calendar_id?: string
          external_calendar_name?: string
          id?: never
          last_sync_at?: string | null
          provider?: Database["public"]["Enums"]["integration_provider"]
          status?: Database["public"]["Enums"]["sync_status"]
          sync_interval_minutes?: number
          sync_mode?: Database["public"]["Enums"]["sync_mode"]
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_integrations_calendar_collection_id_fkey"
            columns: ["calendar_collection_id"]
            isOneToOne: false
            referencedRelation: "calendar_collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_integrations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_integrations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_integrations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_integrations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      calendar_invitations: {
        Row: {
          calendar_id: number
          created_at: string
          email: string
          expires_at: string
          id: number
          invited_by: string
          permission_level: string
          status: string
          token: string
          updated_at: string
        }
        Insert: {
          calendar_id: number
          created_at?: string
          email: string
          expires_at?: string
          id?: number
          invited_by: string
          permission_level: string
          status?: string
          token: string
          updated_at?: string
        }
        Update: {
          calendar_id?: number
          created_at?: string
          email?: string
          expires_at?: string
          id?: number
          invited_by?: string
          permission_level?: string
          status?: string
          token?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_invitations_calendar_id_fkey"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar_collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_invitations_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_invitations_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      calendar_permissions: {
        Row: {
          created_at: string
          event_id: number
          granted_by: string | null
          id: number
          permission_type: Database["public"]["Enums"]["calendar_permission_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          event_id: number
          granted_by?: string | null
          id?: number
          permission_type: Database["public"]["Enums"]["calendar_permission_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          event_id?: number
          granted_by?: string | null
          id?: number
          permission_type?: Database["public"]["Enums"]["calendar_permission_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_permissions_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_permissions_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_permissions_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_permissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      calendar_recurring_rules: {
        Row: {
          created_at: string
          event_id: number
          exceptions: Json | null
          id: number
          rrule_string: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          event_id: number
          exceptions?: Json | null
          id?: number
          rrule_string: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          event_id?: number
          exceptions?: Json | null
          id?: number
          rrule_string?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_recurring_rules_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_shares: {
        Row: {
          calendar_id: number
          created_at: string
          created_by: string | null
          id: number
          is_public: boolean
          permission_level: string
          public_share_token: string | null
          shared_with_user_id: string | null
          updated_at: string
        }
        Insert: {
          calendar_id: number
          created_at?: string
          created_by?: string | null
          id?: number
          is_public?: boolean
          permission_level: string
          public_share_token?: string | null
          shared_with_user_id?: string | null
          updated_at?: string
        }
        Update: {
          calendar_id?: number
          created_at?: string
          created_by?: string | null
          id?: number
          is_public?: boolean
          permission_level?: string
          public_share_token?: string | null
          shared_with_user_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_shares_calendar_id_fkey"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar_collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_shares_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_shares_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "calendar_shares_shared_with_user_id_fkey"
            columns: ["shared_with_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "calendar_shares_shared_with_user_id_fkey"
            columns: ["shared_with_user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      calendly_webhook_logs: {
        Row: {
          created_at: string | null
          error_message: string | null
          event_type: string
          event_uri: string | null
          id: number
          invitee_email: string | null
          invitee_uri: string | null
          matched_invitation_id: number | null
          payload: Json
          processed: boolean | null
        }
        Insert: {
          created_at?: string | null
          error_message?: string | null
          event_type: string
          event_uri?: string | null
          id?: number
          invitee_email?: string | null
          invitee_uri?: string | null
          matched_invitation_id?: number | null
          payload: Json
          processed?: boolean | null
        }
        Update: {
          created_at?: string | null
          error_message?: string | null
          event_type?: string
          event_uri?: string | null
          id?: number
          invitee_email?: string | null
          invitee_uri?: string | null
          matched_invitation_id?: number | null
          payload?: Json
          processed?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "calendly_webhook_logs_matched_invitation_id_fkey"
            columns: ["matched_invitation_id"]
            isOneToOne: false
            referencedRelation: "event_invitations"
            referencedColumns: ["id"]
          },
        ]
      }
      call_management_reasons: {
        Row: {
          created_at: string | null
          id: number
          name: string
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id: number
          name: string
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          status?: string | null
        }
        Relationships: []
      }
      campaign_analytics: {
        Row: {
          campaign_id: number | null
          channel: string
          created_at: string | null
          id: number
          metric_date: string
          metrics: Json | null
          product_id: number
          subcampaign_id: number | null
          updated_at: string | null
        }
        Insert: {
          campaign_id?: number | null
          channel: string
          created_at?: string | null
          id?: never
          metric_date?: string
          metrics?: Json | null
          product_id: number
          subcampaign_id?: number | null
          updated_at?: string | null
        }
        Update: {
          campaign_id?: number | null
          channel?: string
          created_at?: string | null
          id?: never
          metric_date?: string
          metrics?: Json | null
          product_id?: number
          subcampaign_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_analytics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_analytics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_analytics_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_analytics_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_dataset_contacts: {
        Row: {
          campaign_dataset_id: number
          contact_id: number
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          campaign_dataset_id: number
          contact_id: number
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          campaign_dataset_id?: number
          contact_id?: number
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_dataset_contacts_campaign_dataset_id_fkey"
            columns: ["campaign_dataset_id"]
            isOneToOne: false
            referencedRelation: "campaign_datasets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_dataset_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_datasets: {
        Row: {
          code: string
          created_at: string | null
          created_by: string | null
          criteria: Json | null
          description: string | null
          id: number
          is_active: boolean
          name: string
          product_id: number
          search_type: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          created_by?: string | null
          criteria?: Json | null
          description?: string | null
          id?: never
          is_active?: boolean
          name: string
          product_id: number
          search_type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          created_by?: string | null
          criteria?: Json | null
          description?: string | null
          id?: never
          is_active?: boolean
          name?: string
          product_id?: number
          search_type?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_datasets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaign_datasets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "campaign_datasets_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_datasets_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaign_datasets_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      campaign_leads: {
        Row: {
          created_at: string | null
          email_job_id: number | null
          id: number
          lead_id: number
          matched_at: string | null
          matched_via: string
          subcampaign_id: number
        }
        Insert: {
          created_at?: string | null
          email_job_id?: number | null
          id?: number
          lead_id: number
          matched_at?: string | null
          matched_via?: string
          subcampaign_id: number
        }
        Update: {
          created_at?: string | null
          email_job_id?: number | null
          id?: number
          lead_id?: number
          matched_at?: string | null
          matched_via?: string
          subcampaign_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "campaign_leads_email_job_id_fkey"
            columns: ["email_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_leads_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads_old1"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_leads_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          code: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string
          id: number
          name: string
          owner_id: string
          product_id: number
          reply_to_email: string | null
          start_date: string
          status: Database["public"]["Enums"]["campaign_status"]
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date: string
          id?: number
          name: string
          owner_id: string
          product_id: number
          reply_to_email?: string | null
          start_date: string
          status?: Database["public"]["Enums"]["campaign_status"]
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string
          id?: number
          name?: string
          owner_id?: string
          product_id?: number
          reply_to_email?: string | null
          start_date?: string
          status?: Database["public"]["Enums"]["campaign_status"]
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "campaigns_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaigns_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "campaigns_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      cities: {
        Row: {
          city: string
          country_id: number
          entered_on: string | null
          id: number
          latlongstring: string | null
          linked_bnc_city_id: number | null
          phone_code: string
          slug: string | null
          state_code: string
          state_id: number | null
          subscribed_company: number
          syn_id: number | null
        }
        Insert: {
          city: string
          country_id: number
          entered_on?: string | null
          id: number
          latlongstring?: string | null
          linked_bnc_city_id?: number | null
          phone_code: string
          slug?: string | null
          state_code: string
          state_id?: number | null
          subscribed_company: number
          syn_id?: number | null
        }
        Update: {
          city?: string
          country_id?: number
          entered_on?: string | null
          id?: number
          latlongstring?: string | null
          linked_bnc_city_id?: number | null
          phone_code?: string
          slug?: string | null
          state_code?: string
          state_id?: number | null
          subscribed_company?: number
          syn_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cities_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cities_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      citylocation: {
        Row: {
          city_id: number | null
          country_id: number | null
          entered_by: number | null
          entered_on: string | null
          id: number
          location_name: string
          subscribed_company: number
          syn_id: number | null
          updated_by: number | null
          updated_on: string | null
        }
        Insert: {
          city_id?: number | null
          country_id?: number | null
          entered_by?: number | null
          entered_on?: string | null
          id: number
          location_name: string
          subscribed_company: number
          syn_id?: number | null
          updated_by?: number | null
          updated_on?: string | null
        }
        Update: {
          city_id?: number | null
          country_id?: number | null
          entered_by?: number | null
          entered_on?: string | null
          id?: number
          location_name?: string
          subscribed_company?: number
          syn_id?: number | null
          updated_by?: number | null
          updated_on?: string | null
        }
        Relationships: []
      }
      collection_accounts: {
        Row: {
          account_number: string | null
          created_at: string
          display_order: number
          id: number
          is_active: boolean
          name: string
          payment_types: string[]
          updated_at: string
        }
        Insert: {
          account_number?: string | null
          created_at?: string
          display_order?: number
          id?: number
          is_active?: boolean
          name: string
          payment_types: string[]
          updated_at?: string
        }
        Update: {
          account_number?: string | null
          created_at?: string
          display_order?: number
          id?: number
          is_active?: boolean
          name?: string
          payment_types?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      commercial_quotation_stg: {
        Row: {
          ApprovalStatus: string | null
          ApprovedBy: number | null
          ApprovedOn: string | null
          approverremarks: string | null
          attachtc: number | null
          autorenewalclause: number | null
          cancellationclause: number | null
          ClosureMonth: string | null
          CompanyID: number
          companytype: string | null
          ContactID: number
          DisplayPIDetails: number | null
          EnteredBy: number | null
          EnteredOn: string | null
          InUSD: number | null
          IsAddOnQuote: number | null
          IsDetailedPDF: number | null
          IsLocked: boolean | null
          isnewpricing: number | null
          isSRO: number | null
          noofpayments: number | null
          Notes: string | null
          OpportunityID: number | null
          opportunityids: string | null
          payment1percentage: number | null
          payment2date: string | null
          payment2percentage: number | null
          payment3date: string | null
          payment3percentage: number | null
          PaymentTerms: string | null
          Percentage: number | null
          pricematchguarantee: number | null
          PriceTag: number | null
          pricingmodel: string | null
          QuotationDate: string
          QuotationID: number
          QuotationRef: string | null
          QuotationRevisionNO: number | null
          QuotationType: string | null
          quoteprobability: string | null
          ratelock: number | null
          ReferenceName: string | null
          remarks: string | null
          shortquote: number | null
          ShowAdditionalDetails: number | null
          ShowNotes: number | null
          ShowPricing: number | null
          Status: number | null
          UpdatedBy: number | null
          UpdatedOn: string | null
          UserID: number
          Validity: string | null
        }
        Insert: {
          ApprovalStatus?: string | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          approverremarks?: string | null
          attachtc?: number | null
          autorenewalclause?: number | null
          cancellationclause?: number | null
          ClosureMonth?: string | null
          CompanyID: number
          companytype?: string | null
          ContactID: number
          DisplayPIDetails?: number | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          InUSD?: number | null
          IsAddOnQuote?: number | null
          IsDetailedPDF?: number | null
          IsLocked?: boolean | null
          isnewpricing?: number | null
          isSRO?: number | null
          noofpayments?: number | null
          Notes?: string | null
          OpportunityID?: number | null
          opportunityids?: string | null
          payment1percentage?: number | null
          payment2date?: string | null
          payment2percentage?: number | null
          payment3date?: string | null
          payment3percentage?: number | null
          PaymentTerms?: string | null
          Percentage?: number | null
          pricematchguarantee?: number | null
          PriceTag?: number | null
          pricingmodel?: string | null
          QuotationDate: string
          QuotationID: number
          QuotationRef?: string | null
          QuotationRevisionNO?: number | null
          QuotationType?: string | null
          quoteprobability?: string | null
          ratelock?: number | null
          ReferenceName?: string | null
          remarks?: string | null
          shortquote?: number | null
          ShowAdditionalDetails?: number | null
          ShowNotes?: number | null
          ShowPricing?: number | null
          Status?: number | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          UserID: number
          Validity?: string | null
        }
        Update: {
          ApprovalStatus?: string | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          approverremarks?: string | null
          attachtc?: number | null
          autorenewalclause?: number | null
          cancellationclause?: number | null
          ClosureMonth?: string | null
          CompanyID?: number
          companytype?: string | null
          ContactID?: number
          DisplayPIDetails?: number | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          InUSD?: number | null
          IsAddOnQuote?: number | null
          IsDetailedPDF?: number | null
          IsLocked?: boolean | null
          isnewpricing?: number | null
          isSRO?: number | null
          noofpayments?: number | null
          Notes?: string | null
          OpportunityID?: number | null
          opportunityids?: string | null
          payment1percentage?: number | null
          payment2date?: string | null
          payment2percentage?: number | null
          payment3date?: string | null
          payment3percentage?: number | null
          PaymentTerms?: string | null
          Percentage?: number | null
          pricematchguarantee?: number | null
          PriceTag?: number | null
          pricingmodel?: string | null
          QuotationDate?: string
          QuotationID?: number
          QuotationRef?: string | null
          QuotationRevisionNO?: number | null
          QuotationType?: string | null
          quoteprobability?: string | null
          ratelock?: number | null
          ReferenceName?: string | null
          remarks?: string | null
          shortquote?: number | null
          ShowAdditionalDetails?: number | null
          ShowNotes?: number | null
          ShowPricing?: number | null
          Status?: number | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          UserID?: number
          Validity?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          address: string | null
          arabic_name: string | null
          bnc_reference_number: string | null
          city_id: number | null
          companytype_id: number | null
          country_id: number | null
          created_at: string | null
          createdby_id: number | null
          dynamic_profile: string | null
          email1: string | null
          email2: string | null
          email3: string | null
          gps_coordinates: string | null
          id: number
          is_internal_company: boolean | null
          last_updated_by: number | null
          linkedin: string | null
          logo: string | null
          name: string | null
          notes: string | null
          old_syn_id: number | null
          phone_area_code1: string | null
          phone_area_code2: string | null
          phone_area_code3: string | null
          phone_country_code1: string | null
          phone_country_code2: string | null
          phone_country_code3: string | null
          phone1: string | null
          phone2: string | null
          phone3: string | null
          po_box: string | null
          profile: string | null
          profile_status: number | null
          state_id: number | null
          status: string | null
          subscribed_company: number | null
          trn: string | null
          twitter: string | null
          updated_at: string | null
          updatedby_id: number | null
          website1: string | null
          website2: string | null
          website3: string | null
          zipcode: string | null
        }
        Insert: {
          address?: string | null
          arabic_name?: string | null
          bnc_reference_number?: string | null
          city_id?: number | null
          companytype_id?: number | null
          country_id?: number | null
          created_at?: string | null
          createdby_id?: number | null
          dynamic_profile?: string | null
          email1?: string | null
          email2?: string | null
          email3?: string | null
          gps_coordinates?: string | null
          id: number
          is_internal_company?: boolean | null
          last_updated_by?: number | null
          linkedin?: string | null
          logo?: string | null
          name?: string | null
          notes?: string | null
          old_syn_id?: number | null
          phone_area_code1?: string | null
          phone_area_code2?: string | null
          phone_area_code3?: string | null
          phone_country_code1?: string | null
          phone_country_code2?: string | null
          phone_country_code3?: string | null
          phone1?: string | null
          phone2?: string | null
          phone3?: string | null
          po_box?: string | null
          profile?: string | null
          profile_status?: number | null
          state_id?: number | null
          status?: string | null
          subscribed_company?: number | null
          trn?: string | null
          twitter?: string | null
          updated_at?: string | null
          updatedby_id?: number | null
          website1?: string | null
          website2?: string | null
          website3?: string | null
          zipcode?: string | null
        }
        Update: {
          address?: string | null
          arabic_name?: string | null
          bnc_reference_number?: string | null
          city_id?: number | null
          companytype_id?: number | null
          country_id?: number | null
          created_at?: string | null
          createdby_id?: number | null
          dynamic_profile?: string | null
          email1?: string | null
          email2?: string | null
          email3?: string | null
          gps_coordinates?: string | null
          id?: number
          is_internal_company?: boolean | null
          last_updated_by?: number | null
          linkedin?: string | null
          logo?: string | null
          name?: string | null
          notes?: string | null
          old_syn_id?: number | null
          phone_area_code1?: string | null
          phone_area_code2?: string | null
          phone_area_code3?: string | null
          phone_country_code1?: string | null
          phone_country_code2?: string | null
          phone_country_code3?: string | null
          phone1?: string | null
          phone2?: string | null
          phone3?: string | null
          po_box?: string | null
          profile?: string | null
          profile_status?: number | null
          state_id?: number | null
          status?: string | null
          subscribed_company?: number | null
          trn?: string | null
          twitter?: string | null
          updated_at?: string | null
          updatedby_id?: number | null
          website1?: string | null
          website2?: string | null
          website3?: string | null
          zipcode?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "companies_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "companies_companytype_id_fkey"
            columns: ["companytype_id"]
            isOneToOne: false
            referencedRelation: "companytypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "companies_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "companies_state_id_fkey"
            columns: ["state_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      company_categories: {
        Row: {
          id: number
          name: string | null
          status: string | null
          type: string | null
          type_id: number | null
        }
        Insert: {
          id: number
          name?: string | null
          status?: string | null
          type?: string | null
          type_id?: number | null
        }
        Update: {
          id?: number
          name?: string | null
          status?: string | null
          type?: string | null
          type_id?: number | null
        }
        Relationships: []
      }
      company_category_mapping: {
        Row: {
          category_id: number
          company_id: number
          id: number
        }
        Insert: {
          category_id: number
          company_id: number
          id: number
        }
        Update: {
          category_id?: number
          company_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "company_category_mapping_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "company_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_category_mapping_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_companyhandler_stg: {
        Row: {
          accountmanageraddedon: string | null
          accountmanagerid: number | null
          companyid: number
          executiveresearchhandleraddedon: string | null
          executiveresearchhandlerid: number | null
          presaleshandleraddedon: string | null
          presaleshandlerid: number | null
          prime_company_id: number | null
          salesinchargeaddedon: string | null
          salesinchargeid: number | null
          salesmanagerid: number | null
          salesmangeraddedon: string | null
          teamleadaddedon: string | null
          teamleadid: number | null
          trainingmanageraddedon: string | null
          trainingmanagerid: number | null
          uploadstatus: string
        }
        Insert: {
          accountmanageraddedon?: string | null
          accountmanagerid?: number | null
          companyid: number
          executiveresearchhandleraddedon?: string | null
          executiveresearchhandlerid?: number | null
          presaleshandleraddedon?: string | null
          presaleshandlerid?: number | null
          prime_company_id?: number | null
          salesinchargeaddedon?: string | null
          salesinchargeid?: number | null
          salesmanagerid?: number | null
          salesmangeraddedon?: string | null
          teamleadaddedon?: string | null
          teamleadid?: number | null
          trainingmanageraddedon?: string | null
          trainingmanagerid?: number | null
          uploadstatus: string
        }
        Update: {
          accountmanageraddedon?: string | null
          accountmanagerid?: number | null
          companyid?: number
          executiveresearchhandleraddedon?: string | null
          executiveresearchhandlerid?: number | null
          presaleshandleraddedon?: string | null
          presaleshandlerid?: number | null
          prime_company_id?: number | null
          salesinchargeaddedon?: string | null
          salesinchargeid?: number | null
          salesmanagerid?: number | null
          salesmangeraddedon?: string | null
          teamleadaddedon?: string | null
          teamleadid?: number | null
          trainingmanageraddedon?: string | null
          trainingmanagerid?: number | null
          uploadstatus?: string
        }
        Relationships: []
      }
      company_credit_ledger: {
        Row: {
          amount: number
          balance_after: number
          calculation_date: string | null
          company_id: number
          created_at: string
          created_by: string
          currency: string
          days_remaining: number | null
          days_total: number | null
          id: number
          invoice_id: number | null
          notes: string | null
          original_subscription_value: number | null
          proforma_id: number | null
          quotation_id: number | null
          source_type: string | null
          subscription_id: number | null
          transaction_type: string
        }
        Insert: {
          amount: number
          balance_after: number
          calculation_date?: string | null
          company_id: number
          created_at?: string
          created_by: string
          currency?: string
          days_remaining?: number | null
          days_total?: number | null
          id?: number
          invoice_id?: number | null
          notes?: string | null
          original_subscription_value?: number | null
          proforma_id?: number | null
          quotation_id?: number | null
          source_type?: string | null
          subscription_id?: number | null
          transaction_type: string
        }
        Update: {
          amount?: number
          balance_after?: number
          calculation_date?: string | null
          company_id?: number
          created_at?: string
          created_by?: string
          currency?: string
          days_remaining?: number | null
          days_total?: number | null
          id?: number
          invoice_id?: number | null
          notes?: string | null
          original_subscription_value?: number | null
          proforma_id?: number | null
          quotation_id?: number | null
          source_type?: string | null
          subscription_id?: number | null
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_credit_ledger_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_credit_ledger_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_credit_ledger_proforma_id_fkey"
            columns: ["proforma_id"]
            isOneToOne: false
            referencedRelation: "proforma_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_credit_ledger_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_credit_ledger_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      company_customtags_stg: {
        Row: {
          EnteredBy: number | null
          EnteredOn: string | null
          SourceID: number | null
          TagID: number | null
          TrID: number
          UserID: number | null
        }
        Insert: {
          EnteredBy?: number | null
          EnteredOn?: string | null
          SourceID?: number | null
          TagID?: number | null
          TrID: number
          UserID?: number | null
        }
        Update: {
          EnteredBy?: number | null
          EnteredOn?: string | null
          SourceID?: number | null
          TagID?: number | null
          TrID?: number
          UserID?: number | null
        }
        Relationships: []
      }
      company_extended_info: {
        Row: {
          annual_revenue: number | null
          company_id: number
          created_at: string | null
          created_by: string | null
          employee_count: number | null
          enrichment_confidence: number | null
          enrichment_source: string | null
          headquarters_country: string | null
          id: number
          industry_primary: string | null
          industry_secondary: string | null
          last_enriched_at: string | null
          revenue_currency: string | null
          segment: string | null
          segment_source: string | null
          updated_at: string | null
          updated_by: string | null
          year_established: number | null
        }
        Insert: {
          annual_revenue?: number | null
          company_id: number
          created_at?: string | null
          created_by?: string | null
          employee_count?: number | null
          enrichment_confidence?: number | null
          enrichment_source?: string | null
          headquarters_country?: string | null
          id?: number
          industry_primary?: string | null
          industry_secondary?: string | null
          last_enriched_at?: string | null
          revenue_currency?: string | null
          segment?: string | null
          segment_source?: string | null
          updated_at?: string | null
          updated_by?: string | null
          year_established?: number | null
        }
        Update: {
          annual_revenue?: number | null
          company_id?: number
          created_at?: string | null
          created_by?: string | null
          employee_count?: number | null
          enrichment_confidence?: number | null
          enrichment_source?: string | null
          headquarters_country?: string | null
          id?: number
          industry_primary?: string | null
          industry_secondary?: string | null
          last_enriched_at?: string | null
          revenue_currency?: string | null
          segment?: string | null
          segment_source?: string | null
          updated_at?: string | null
          updated_by?: string | null
          year_established?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "company_extended_info_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      company_handler_removal_log: {
        Row: {
          ai_agent_run_id: number | null
          ai_decision_type: string | null
          ai_reasoning: string[] | null
          company_id: number
          created_at: string | null
          created_by: string | null
          handler_id: string
          handler_type_id: number
          id: number
          lost_reason_ids: number[] | null
          lost_subreason_ids: number[] | null
          outcome: string
          outcome_notes: string | null
          product_id: number
          sfs_after_id: number | null
          sfs_before_id: number | null
        }
        Insert: {
          ai_agent_run_id?: number | null
          ai_decision_type?: string | null
          ai_reasoning?: string[] | null
          company_id: number
          created_at?: string | null
          created_by?: string | null
          handler_id: string
          handler_type_id: number
          id?: number
          lost_reason_ids?: number[] | null
          lost_subreason_ids?: number[] | null
          outcome: string
          outcome_notes?: string | null
          product_id: number
          sfs_after_id?: number | null
          sfs_before_id?: number | null
        }
        Update: {
          ai_agent_run_id?: number | null
          ai_decision_type?: string | null
          ai_reasoning?: string[] | null
          company_id?: number
          created_at?: string | null
          created_by?: string | null
          handler_id?: string
          handler_type_id?: number
          id?: number
          lost_reason_ids?: number[] | null
          lost_subreason_ids?: number[] | null
          outcome?: string
          outcome_notes?: string | null
          product_id?: number
          sfs_after_id?: number | null
          sfs_before_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "company_handler_removal_log_ai_agent_run_id_fkey"
            columns: ["ai_agent_run_id"]
            isOneToOne: false
            referencedRelation: "ai_agent_run_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_handler_id_fkey"
            columns: ["handler_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_handler_id_fkey"
            columns: ["handler_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_handler_type_id_fkey"
            columns: ["handler_type_id"]
            isOneToOne: false
            referencedRelation: "company_handler_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handler_removal_log_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      company_handler_sender_cache: {
        Row: {
          company_id: number
          created_at: string | null
          from_email: string
          from_name: string
          handler_id: string
          handler_type_id: number
          id: number
          product_id: number
          signature_html: string | null
          updated_at: string | null
        }
        Insert: {
          company_id: number
          created_at?: string | null
          from_email: string
          from_name: string
          handler_id: string
          handler_type_id: number
          id?: number
          product_id: number
          signature_html?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: number
          created_at?: string | null
          from_email?: string
          from_name?: string
          handler_id?: string
          handler_type_id?: number
          id?: number
          product_id?: number
          signature_html?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_handler_sender_cache_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handler_sender_cache_handler_type_id_fkey"
            columns: ["handler_type_id"]
            isOneToOne: false
            referencedRelation: "company_handler_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handler_sender_cache_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      company_handler_types: {
        Row: {
          created_at: string | null
          handlertype: string
          id: number
          product_id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          handlertype: string
          id?: number
          product_id: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          handlertype?: string
          id?: number
          product_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_handler_types_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      company_handlers: {
        Row: {
          companyid: number
          entered_by: string | null
          entered_on: string
          handler_id: string | null
          handler_type_id: number
          id: number
          product_id: number
          updated_by: string | null
          updated_on: string
        }
        Insert: {
          companyid: number
          entered_by?: string | null
          entered_on?: string
          handler_id?: string | null
          handler_type_id: number
          id?: number
          product_id: number
          updated_by?: string | null
          updated_on?: string
        }
        Update: {
          companyid?: number
          entered_by?: string | null
          entered_on?: string
          handler_id?: string | null
          handler_type_id?: number
          id?: number
          product_id?: number
          updated_by?: string | null
          updated_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_handlers_companyid_fkey"
            columns: ["companyid"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handlers_entered_by_fkey"
            columns: ["entered_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_handlers_entered_by_fkey"
            columns: ["entered_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "company_handlers_handler_id_fkey"
            columns: ["handler_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_handlers_handler_id_fkey"
            columns: ["handler_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "company_handlers_handler_type_id_fkey"
            columns: ["handler_type_id"]
            isOneToOne: false
            referencedRelation: "company_handler_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handlers_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_handlers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_handlers_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      company_ntd: {
        Row: {
          company_id: number
          created_at: string | null
          id: number
          ntd_date: string | null
          product_id: number
          reason: string
          source_reminder_id: number | null
          source_task_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          company_id: number
          created_at?: string | null
          id?: number
          ntd_date?: string | null
          product_id: number
          reason: string
          source_reminder_id?: number | null
          source_task_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          company_id?: number
          created_at?: string | null
          id?: number
          ntd_date?: string | null
          product_id?: number
          reason?: string
          source_reminder_id?: number | null
          source_task_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_ntd_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_ntd_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_ntd_source_reminder_id_fkey"
            columns: ["source_reminder_id"]
            isOneToOne: false
            referencedRelation: "reminders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_ntd_source_task_id_fkey"
            columns: ["source_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "company_ntd_source_task_id_fkey"
            columns: ["source_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist_enriched"
            referencedColumns: ["tasklistid"]
          },
        ]
      }
      company_publicdomain_stg: {
        Row: {
          publicdomain: string | null
          publicdomainid: number
          status: string | null
        }
        Insert: {
          publicdomain?: string | null
          publicdomainid: number
          status?: string | null
        }
        Update: {
          publicdomain?: string | null
          publicdomainid?: number
          status?: string | null
        }
        Relationships: []
      }
      company_sfs: {
        Row: {
          companyid: number
          enteredby: string | null
          enteredon: string | null
          id: number
          notes: string | null
          productid: number
          sfsid: number
          updatedby: string | null
          updatedon: string | null
        }
        Insert: {
          companyid: number
          enteredby?: string | null
          enteredon?: string | null
          id?: number
          notes?: string | null
          productid: number
          sfsid: number
          updatedby?: string | null
          updatedon?: string | null
        }
        Update: {
          companyid?: number
          enteredby?: string | null
          enteredon?: string | null
          id?: number
          notes?: string | null
          productid?: number
          sfsid?: number
          updatedby?: string | null
          updatedon?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_sfs_companyid_fkey"
            columns: ["companyid"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_sfs_enteredby_fkey"
            columns: ["enteredby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_sfs_enteredby_fkey"
            columns: ["enteredby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "company_sfs_productid_fkey"
            columns: ["productid"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_sfs_sfsid_fkey"
            columns: ["sfsid"]
            isOneToOne: false
            referencedRelation: "sfs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_sfs_updatedby_fkey"
            columns: ["updatedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "company_sfs_updatedby_fkey"
            columns: ["updatedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      company_sfs_logs: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          company_sfs_id: number | null
          companyid: number | null
          enteredby: string | null
          enteredon: string | null
          id: number
          new_values: Json | null
          old_values: Json | null
          operation_type: string
          productid: number | null
          sfsid: number | null
          updatedby: string | null
          updatedon: string | null
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          company_sfs_id?: number | null
          companyid?: number | null
          enteredby?: string | null
          enteredon?: string | null
          id?: number
          new_values?: Json | null
          old_values?: Json | null
          operation_type: string
          productid?: number | null
          sfsid?: number | null
          updatedby?: string | null
          updatedon?: string | null
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          company_sfs_id?: number | null
          companyid?: number | null
          enteredby?: string | null
          enteredon?: string | null
          id?: number
          new_values?: Json | null
          old_values?: Json | null
          operation_type?: string
          productid?: number | null
          sfsid?: number | null
          updatedby?: string | null
          updatedon?: string | null
        }
        Relationships: []
      }
      company_sfs_stg: {
        Row: {
          approvesfs: number | null
          companyid: number | null
          enteredby: number | null
          enteredon: string | null
          prime_company_id: number | null
          reasonids: string | null
          removesfs: number | null
          serviceid: number | null
          sfsid: number | null
          sfsnotes: string | null
          trid: number
          updatedby: number | null
          updatedon: string | null
        }
        Insert: {
          approvesfs?: number | null
          companyid?: number | null
          enteredby?: number | null
          enteredon?: string | null
          prime_company_id?: number | null
          reasonids?: string | null
          removesfs?: number | null
          serviceid?: number | null
          sfsid?: number | null
          sfsnotes?: string | null
          trid: number
          updatedby?: number | null
          updatedon?: string | null
        }
        Update: {
          approvesfs?: number | null
          companyid?: number | null
          enteredby?: number | null
          enteredon?: string | null
          prime_company_id?: number | null
          reasonids?: string | null
          removesfs?: number | null
          serviceid?: number | null
          sfsid?: number | null
          sfsnotes?: string | null
          trid?: number
          updatedby?: number | null
          updatedon?: string | null
        }
        Relationships: []
      }
      companytree: {
        Row: {
          added_on: string | null
          changeset_id: number | null
          child_company_id: number
          id: number
          main_company_id: number | null
          old_syn_id: number | null
          root_id: number | null
          subscribed_company: number
          syn_id: number | null
        }
        Insert: {
          added_on?: string | null
          changeset_id?: number | null
          child_company_id: number
          id: number
          main_company_id?: number | null
          old_syn_id?: number | null
          root_id?: number | null
          subscribed_company: number
          syn_id?: number | null
        }
        Update: {
          added_on?: string | null
          changeset_id?: number | null
          child_company_id?: number
          id?: number
          main_company_id?: number | null
          old_syn_id?: number | null
          root_id?: number | null
          subscribed_company?: number
          syn_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "companytree_child_company_id_fkey"
            columns: ["child_company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "companytree_main_company_id_fkey"
            columns: ["main_company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "companytree_root_id_fkey"
            columns: ["root_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companytypes: {
        Row: {
          displayorder: number | null
          id: number
          type: string
        }
        Insert: {
          displayorder?: number | null
          id?: number
          type: string
        }
        Update: {
          displayorder?: number | null
          id?: number
          type?: string
        }
        Relationships: []
      }
      competitor_subscription_logs: {
        Row: {
          change_type: string
          changed_fields: string[] | null
          competitor_subscription_id: number
          description: string
          id: number
          meta: Json | null
          new_values: Json | null
          old_values: Json | null
          performed_at: string | null
          performed_by: string | null
        }
        Insert: {
          change_type: string
          changed_fields?: string[] | null
          competitor_subscription_id: number
          description: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
        }
        Update: {
          change_type?: string
          changed_fields?: string[] | null
          competitor_subscription_id?: number
          description?: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_subscription_logs_competitor_subscription_id_fkey"
            columns: ["competitor_subscription_id"]
            isOneToOne: false
            referencedRelation: "competitor_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitor_subscription_logs_performed_by_fkey"
            columns: ["performed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "competitor_subscription_logs_performed_by_fkey"
            columns: ["performed_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      competitor_subscriptions: {
        Row: {
          amount_paid: number | null
          company_id: number
          competitor_id: number
          created_at: string | null
          created_by: string | null
          currency: string | null
          end_date: string
          id: number
          notes: string | null
          product_id: number | null
          renewal_reminder_days: number | null
          start_date: string
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          amount_paid?: number | null
          company_id: number
          competitor_id: number
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          end_date: string
          id?: number
          notes?: string | null
          product_id?: number | null
          renewal_reminder_days?: number | null
          start_date: string
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          amount_paid?: number | null
          company_id?: number
          competitor_id?: number
          created_at?: string | null
          created_by?: string | null
          currency?: string | null
          end_date?: string
          id?: number
          notes?: string | null
          product_id?: number | null
          renewal_reminder_days?: number | null
          start_date?: string
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competitor_subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitor_subscriptions_competitor_id_fkey"
            columns: ["competitor_id"]
            isOneToOne: false
            referencedRelation: "competitors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitor_subscriptions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "competitor_subscriptions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "competitor_subscriptions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitor_subscriptions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "competitor_subscriptions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      competitors: {
        Row: {
          category: string | null
          company_id: number
          created_at: string | null
          created_by: string | null
          id: number
          is_active: boolean | null
          notes: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category?: string | null
          company_id: number
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          notes?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category?: string | null
          company_id?: number
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_active?: boolean | null
          notes?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "competitors_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: true
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "competitors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "competitors_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "competitors_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "competitors_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      consumer_api_mailinglist: {
        Row: {
          created_on: string
          email_id: string
          id: number
          mailinglist_type_id: number
          status: string
          syn_id: number | null
          unique_id: string | null
          updated_on: string
        }
        Insert: {
          created_on: string
          email_id: string
          id: number
          mailinglist_type_id: number
          status: string
          syn_id?: number | null
          unique_id?: string | null
          updated_on: string
        }
        Update: {
          created_on?: string
          email_id?: string
          id?: number
          mailinglist_type_id?: number
          status?: string
          syn_id?: number | null
          unique_id?: string | null
          updated_on?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          addressed_as: string | null
          can_list: boolean
          company_id: number | null
          created_at: string
          created_by_id: number | null
          designation_id: number | null
          display_flag: boolean | null
          display_order: number | null
          email1: string | null
          email2: string | null
          email3: string | null
          facebook: string | null
          first_name: string
          id: number
          inactive_reason: string | null
          language: string | null
          last_name: string
          linkedin: string | null
          lusha_json: Json | null
          mobile_area_code1: string | null
          mobile_area_code2: string | null
          mobile_area_code3: string | null
          mobile_country_code1: string | null
          mobile_country_code2: string | null
          mobile_country_code3: string | null
          mobile1: string | null
          mobile2: string | null
          mobile3: string | null
          nationality_id: number | null
          notes: string | null
          old_syn_id: number | null
          other_designation: string | null
          phone_area_code1: string | null
          phone_area_code2: string | null
          phone_area_code3: string | null
          phone_country_code1: string | null
          phone_country_code2: string | null
          phone_country_code3: string | null
          phone1: string | null
          phone2: string | null
          phone3: string | null
          source: string | null
          status: string | null
          title: string | null
          updated_at: string
          updated_by_id: number | null
          updated_on: string | null
          user_modified_on: string | null
          verified_on: string | null
          visible: boolean
          x_url: string | null
        }
        Insert: {
          addressed_as?: string | null
          can_list: boolean
          company_id?: number | null
          created_at: string
          created_by_id?: number | null
          designation_id?: number | null
          display_flag?: boolean | null
          display_order?: number | null
          email1?: string | null
          email2?: string | null
          email3?: string | null
          facebook?: string | null
          first_name: string
          id: number
          inactive_reason?: string | null
          language?: string | null
          last_name: string
          linkedin?: string | null
          lusha_json?: Json | null
          mobile_area_code1?: string | null
          mobile_area_code2?: string | null
          mobile_area_code3?: string | null
          mobile_country_code1?: string | null
          mobile_country_code2?: string | null
          mobile_country_code3?: string | null
          mobile1?: string | null
          mobile2?: string | null
          mobile3?: string | null
          nationality_id?: number | null
          notes?: string | null
          old_syn_id?: number | null
          other_designation?: string | null
          phone_area_code1?: string | null
          phone_area_code2?: string | null
          phone_area_code3?: string | null
          phone_country_code1?: string | null
          phone_country_code2?: string | null
          phone_country_code3?: string | null
          phone1?: string | null
          phone2?: string | null
          phone3?: string | null
          source?: string | null
          status?: string | null
          title?: string | null
          updated_at: string
          updated_by_id?: number | null
          updated_on?: string | null
          user_modified_on?: string | null
          verified_on?: string | null
          visible: boolean
          x_url?: string | null
        }
        Update: {
          addressed_as?: string | null
          can_list?: boolean
          company_id?: number | null
          created_at?: string
          created_by_id?: number | null
          designation_id?: number | null
          display_flag?: boolean | null
          display_order?: number | null
          email1?: string | null
          email2?: string | null
          email3?: string | null
          facebook?: string | null
          first_name?: string
          id?: number
          inactive_reason?: string | null
          language?: string | null
          last_name?: string
          linkedin?: string | null
          lusha_json?: Json | null
          mobile_area_code1?: string | null
          mobile_area_code2?: string | null
          mobile_area_code3?: string | null
          mobile_country_code1?: string | null
          mobile_country_code2?: string | null
          mobile_country_code3?: string | null
          mobile1?: string | null
          mobile2?: string | null
          mobile3?: string | null
          nationality_id?: number | null
          notes?: string | null
          old_syn_id?: number | null
          other_designation?: string | null
          phone_area_code1?: string | null
          phone_area_code2?: string | null
          phone_area_code3?: string | null
          phone_country_code1?: string | null
          phone_country_code2?: string | null
          phone_country_code3?: string | null
          phone1?: string | null
          phone2?: string | null
          phone3?: string | null
          source?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string
          updated_by_id?: number | null
          updated_on?: string | null
          user_modified_on?: string | null
          verified_on?: string | null
          visible?: boolean
          x_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_designation_id_fkey"
            columns: ["designation_id"]
            isOneToOne: false
            referencedRelation: "designations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_nationality_id_fkey"
            columns: ["nationality_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      contentsets: {
        Row: {
          assumptions: string | null
          city_ids: string | null
          city_name: string | null
          content_classification_id: number | null
          content_type_id: number | null
          country_ids: string | null
          country_name: string | null
          description: string
          file_name_format: string | null
          geography_id: number | null
          id: number
          industry_ids: string | null
          industry_name: string | null
          name: string
          period_type_id: number | null
          price: number
          sector_id: number | null
          sector_ids: string | null
          sector_name: string | null
          short_description: string | null
          status: string
          template_id: number | null
        }
        Insert: {
          assumptions?: string | null
          city_ids?: string | null
          city_name?: string | null
          content_classification_id?: number | null
          content_type_id?: number | null
          country_ids?: string | null
          country_name?: string | null
          description: string
          file_name_format?: string | null
          geography_id?: number | null
          id: number
          industry_ids?: string | null
          industry_name?: string | null
          name: string
          period_type_id?: number | null
          price: number
          sector_id?: number | null
          sector_ids?: string | null
          sector_name?: string | null
          short_description?: string | null
          status: string
          template_id?: number | null
        }
        Update: {
          assumptions?: string | null
          city_ids?: string | null
          city_name?: string | null
          content_classification_id?: number | null
          content_type_id?: number | null
          country_ids?: string | null
          country_name?: string | null
          description?: string
          file_name_format?: string | null
          geography_id?: number | null
          id?: number
          industry_ids?: string | null
          industry_name?: string | null
          name?: string
          period_type_id?: number | null
          price?: number
          sector_id?: number | null
          sector_ids?: string | null
          sector_name?: string | null
          short_description?: string | null
          status?: string
          template_id?: number | null
        }
        Relationships: []
      }
      core_aircreditsinvoice_stg: {
        Row: {
          aircreditid: number | null
          aircreditinvoiceno: number | null
          bncuserid: number | null
          companyid: number | null
          creditinvoiceid: number
          enteredby: number | null
          enteredon: string | null
          rate: number | null
          ReferenceName: string | null
          total_amount: number | null
          updatedby: number | null
          updatedon: string | null
          vat_perc: number | null
        }
        Insert: {
          aircreditid?: number | null
          aircreditinvoiceno?: number | null
          bncuserid?: number | null
          companyid?: number | null
          creditinvoiceid: number
          enteredby?: number | null
          enteredon?: string | null
          rate?: number | null
          ReferenceName?: string | null
          total_amount?: number | null
          updatedby?: number | null
          updatedon?: string | null
          vat_perc?: number | null
        }
        Update: {
          aircreditid?: number | null
          aircreditinvoiceno?: number | null
          bncuserid?: number | null
          companyid?: number | null
          creditinvoiceid?: number
          enteredby?: number | null
          enteredon?: string | null
          rate?: number | null
          ReferenceName?: string | null
          total_amount?: number | null
          updatedby?: number | null
          updatedon?: string | null
          vat_perc?: number | null
        }
        Relationships: []
      }
      core_ihubinnovationrenewaltags_stg: {
        Row: {
          EnteredBy: number | null
          EnteredOn: string | null
          prime_contact_id: number | null
          SourceID: number | null
          TagID: number | null
          TrID: number | null
          UserID: number | null
        }
        Insert: {
          EnteredBy?: number | null
          EnteredOn?: string | null
          prime_contact_id?: number | null
          SourceID?: number | null
          TagID?: number | null
          TrID?: number | null
          UserID?: number | null
        }
        Update: {
          EnteredBy?: number | null
          EnteredOn?: string | null
          prime_contact_id?: number | null
          SourceID?: number | null
          TagID?: number | null
          TrID?: number | null
          UserID?: number | null
        }
        Relationships: []
      }
      core_invoice_stg: {
        Row: {
          accountmanagerid: number | null
          addedby: number | null
          AdminUserID: number | null
          Amount: number | null
          ApprovedBy: number | null
          ApprovedOn: string | null
          autorenewal: number | null
          CollectionStatus: string | null
          CompanyID: number | null
          CustomAddress: string | null
          DisplayCustomAddress: number | null
          DisplayNotes: number | null
          DomainNames: string | null
          EnteredBy: number | null
          EnteredOn: string | null
          InUSD: number | null
          InvoiceDate: string | null
          InvoiceID: number
          InvoiceNo: number | null
          InvoiceStatus: string | null
          Notes: string | null
          OpportunityID: number | null
          OptionID: string | null
          PaymentExpOn: string | null
          POAmount: number | null
          PODate: string | null
          PONumber: string | null
          prime_company_id: number | null
          proformainvoiceid: number | null
          QuotationID: number | null
          ReferenceName: string | null
          ShowAdmin: number | null
          SplittedInvoice: boolean | null
          SubscriptionStatus: number | null
          UpdatedBy: number | null
          UpdatedOn: string | null
          VerifiedEmails: string | null
          verifyFlag: number | null
        }
        Insert: {
          accountmanagerid?: number | null
          addedby?: number | null
          AdminUserID?: number | null
          Amount?: number | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          autorenewal?: number | null
          CollectionStatus?: string | null
          CompanyID?: number | null
          CustomAddress?: string | null
          DisplayCustomAddress?: number | null
          DisplayNotes?: number | null
          DomainNames?: string | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          InUSD?: number | null
          InvoiceDate?: string | null
          InvoiceID: number
          InvoiceNo?: number | null
          InvoiceStatus?: string | null
          Notes?: string | null
          OpportunityID?: number | null
          OptionID?: string | null
          PaymentExpOn?: string | null
          POAmount?: number | null
          PODate?: string | null
          PONumber?: string | null
          prime_company_id?: number | null
          proformainvoiceid?: number | null
          QuotationID?: number | null
          ReferenceName?: string | null
          ShowAdmin?: number | null
          SplittedInvoice?: boolean | null
          SubscriptionStatus?: number | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          VerifiedEmails?: string | null
          verifyFlag?: number | null
        }
        Update: {
          accountmanagerid?: number | null
          addedby?: number | null
          AdminUserID?: number | null
          Amount?: number | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          autorenewal?: number | null
          CollectionStatus?: string | null
          CompanyID?: number | null
          CustomAddress?: string | null
          DisplayCustomAddress?: number | null
          DisplayNotes?: number | null
          DomainNames?: string | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          InUSD?: number | null
          InvoiceDate?: string | null
          InvoiceID?: number
          InvoiceNo?: number | null
          InvoiceStatus?: string | null
          Notes?: string | null
          OpportunityID?: number | null
          OptionID?: string | null
          PaymentExpOn?: string | null
          POAmount?: number | null
          PODate?: string | null
          PONumber?: string | null
          prime_company_id?: number | null
          proformainvoiceid?: number | null
          QuotationID?: number | null
          ReferenceName?: string | null
          ShowAdmin?: number | null
          SplittedInvoice?: boolean | null
          SubscriptionStatus?: number | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          VerifiedEmails?: string | null
          verifyFlag?: number | null
        }
        Relationships: []
      }
      core_invoicecollection_stg: {
        Row: {
          Amount: number | null
          ApprovedBy: number | null
          ApprovedOn: string | null
          BookingDate: string | null
          CardExpiry: string | null
          CollectionDate: string | null
          EnteredBy: number | null
          EnteredOn: string | null
          handler: number | null
          InvoiceID: number
          IsGenerated: string | null
          PaymentDate: string | null
          PaymentType: string | null
          receiptID: number | null
          status: string | null
          TrID: number
          UpdatedBy: number | null
          UpdatedOn: string | null
        }
        Insert: {
          Amount?: number | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          BookingDate?: string | null
          CardExpiry?: string | null
          CollectionDate?: string | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          handler?: number | null
          InvoiceID: number
          IsGenerated?: string | null
          PaymentDate?: string | null
          PaymentType?: string | null
          receiptID?: number | null
          status?: string | null
          TrID: number
          UpdatedBy?: number | null
          UpdatedOn?: string | null
        }
        Update: {
          Amount?: number | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          BookingDate?: string | null
          CardExpiry?: string | null
          CollectionDate?: string | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          handler?: number | null
          InvoiceID?: number
          IsGenerated?: string | null
          PaymentDate?: string | null
          PaymentType?: string | null
          receiptID?: number | null
          status?: string | null
          TrID?: number
          UpdatedBy?: number | null
          UpdatedOn?: string | null
        }
        Relationships: []
      }
      core_invoicereceipts_stg: {
        Row: {
          CollectionID: string | null
          CreatedBy: number | null
          CreatedOn: string | null
          InvoiceID: number | null
          receiptID: number
          TotalAmount: number | null
        }
        Insert: {
          CollectionID?: string | null
          CreatedBy?: number | null
          CreatedOn?: string | null
          InvoiceID?: number | null
          receiptID: number
          TotalAmount?: number | null
        }
        Update: {
          CollectionID?: string | null
          CreatedBy?: number | null
          CreatedOn?: string | null
          InvoiceID?: number | null
          receiptID?: number
          TotalAmount?: number | null
        }
        Relationships: []
      }
      core_ntd_stg: {
        Row: {
          ActionType: string | null
          CompanyID: number | null
          NTD: string | null
          TrID: number
        }
        Insert: {
          ActionType?: string | null
          CompanyID?: number | null
          NTD?: string | null
          TrID: number
        }
        Update: {
          ActionType?: string | null
          CompanyID?: number | null
          NTD?: string | null
          TrID?: number
        }
        Relationships: []
      }
      core_proformainvoice_stg: {
        Row: {
          accountmanagerid: number | null
          addedby: number | null
          AdminUserID: number | null
          amount: number | null
          approvedby: number | null
          approvedon: string | null
          autorenewal: number | null
          companyid: number
          customaddress: string | null
          displaycustomaddress: number | null
          displaynotes: number | null
          enteredby: number
          enteredon: string
          inUSD: number | null
          isinvoicegenerated: boolean | null
          notes: string | null
          optionid: string
          paymentexpon: string | null
          poamount: number | null
          podate: string | null
          ponumber: string | null
          prime_company_id: number | null
          proformainvoicedate: string
          proformainvoiceid: number
          proformainvoiceno: number
          proformainvoicestatus: string
          quotationid: number
          referencename: string | null
          showadmin: number | null
          updatedby: number | null
          updatedon: string | null
          vatamount: number | null
        }
        Insert: {
          accountmanagerid?: number | null
          addedby?: number | null
          AdminUserID?: number | null
          amount?: number | null
          approvedby?: number | null
          approvedon?: string | null
          autorenewal?: number | null
          companyid: number
          customaddress?: string | null
          displaycustomaddress?: number | null
          displaynotes?: number | null
          enteredby: number
          enteredon: string
          inUSD?: number | null
          isinvoicegenerated?: boolean | null
          notes?: string | null
          optionid: string
          paymentexpon?: string | null
          poamount?: number | null
          podate?: string | null
          ponumber?: string | null
          prime_company_id?: number | null
          proformainvoicedate: string
          proformainvoiceid: number
          proformainvoiceno: number
          proformainvoicestatus: string
          quotationid: number
          referencename?: string | null
          showadmin?: number | null
          updatedby?: number | null
          updatedon?: string | null
          vatamount?: number | null
        }
        Update: {
          accountmanagerid?: number | null
          addedby?: number | null
          AdminUserID?: number | null
          amount?: number | null
          approvedby?: number | null
          approvedon?: string | null
          autorenewal?: number | null
          companyid?: number
          customaddress?: string | null
          displaycustomaddress?: number | null
          displaynotes?: number | null
          enteredby?: number
          enteredon?: string
          inUSD?: number | null
          isinvoicegenerated?: boolean | null
          notes?: string | null
          optionid?: string
          paymentexpon?: string | null
          poamount?: number | null
          podate?: string | null
          ponumber?: string | null
          prime_company_id?: number | null
          proformainvoicedate?: string
          proformainvoiceid?: number
          proformainvoiceno?: number
          proformainvoicestatus?: string
          quotationid?: number
          referencename?: string | null
          showadmin?: number | null
          updatedby?: number | null
          updatedon?: string | null
          vatamount?: number | null
        }
        Relationships: []
      }
      core_quotation_stg: {
        Row: {
          ApprovalStatus: string | null
          ApprovedBy: number | null
          ApprovedOn: string | null
          approverremarks: string | null
          attachtc: number | null
          autorenewalclause: number | null
          cancellationclause: number | null
          ClosureMonth: string | null
          CompanyID: number
          companytype: string | null
          ContactID: number
          DisplayPIDetails: number | null
          EnteredBy: number | null
          EnteredOn: string | null
          InUSD: number | null
          IsAddOnQuote: number | null
          IsDetailedPDF: number | null
          IsLocked: boolean | null
          isnewpricing: number | null
          isSRO: number | null
          noofpayments: number | null
          Notes: string | null
          OpportunityID: number | null
          opportunityids: string | null
          payment1percentage: number | null
          payment2date: string | null
          payment2percentage: number | null
          payment3date: string | null
          payment3percentage: number | null
          PaymentTerms: string | null
          Percentage: number | null
          pricematchguarantee: number | null
          PriceTag: number | null
          pricingmodel: string | null
          prime_company_id: number | null
          prime_contact_id: number | null
          QuotationDate: string
          QuotationID: number
          QuotationRef: string | null
          QuotationRevisionNO: number | null
          QuotationType: string | null
          quoteprobability: string | null
          ratelock: number | null
          ReferenceName: string | null
          remarks: string | null
          shortquote: number | null
          ShowAdditionalDetails: number | null
          ShowNotes: number | null
          ShowPricing: number | null
          Status: number | null
          UpdatedBy: number | null
          UpdatedOn: string | null
          UserID: number
          Validity: string | null
        }
        Insert: {
          ApprovalStatus?: string | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          approverremarks?: string | null
          attachtc?: number | null
          autorenewalclause?: number | null
          cancellationclause?: number | null
          ClosureMonth?: string | null
          CompanyID: number
          companytype?: string | null
          ContactID: number
          DisplayPIDetails?: number | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          InUSD?: number | null
          IsAddOnQuote?: number | null
          IsDetailedPDF?: number | null
          IsLocked?: boolean | null
          isnewpricing?: number | null
          isSRO?: number | null
          noofpayments?: number | null
          Notes?: string | null
          OpportunityID?: number | null
          opportunityids?: string | null
          payment1percentage?: number | null
          payment2date?: string | null
          payment2percentage?: number | null
          payment3date?: string | null
          payment3percentage?: number | null
          PaymentTerms?: string | null
          Percentage?: number | null
          pricematchguarantee?: number | null
          PriceTag?: number | null
          pricingmodel?: string | null
          prime_company_id?: number | null
          prime_contact_id?: number | null
          QuotationDate: string
          QuotationID: number
          QuotationRef?: string | null
          QuotationRevisionNO?: number | null
          QuotationType?: string | null
          quoteprobability?: string | null
          ratelock?: number | null
          ReferenceName?: string | null
          remarks?: string | null
          shortquote?: number | null
          ShowAdditionalDetails?: number | null
          ShowNotes?: number | null
          ShowPricing?: number | null
          Status?: number | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          UserID: number
          Validity?: string | null
        }
        Update: {
          ApprovalStatus?: string | null
          ApprovedBy?: number | null
          ApprovedOn?: string | null
          approverremarks?: string | null
          attachtc?: number | null
          autorenewalclause?: number | null
          cancellationclause?: number | null
          ClosureMonth?: string | null
          CompanyID?: number
          companytype?: string | null
          ContactID?: number
          DisplayPIDetails?: number | null
          EnteredBy?: number | null
          EnteredOn?: string | null
          InUSD?: number | null
          IsAddOnQuote?: number | null
          IsDetailedPDF?: number | null
          IsLocked?: boolean | null
          isnewpricing?: number | null
          isSRO?: number | null
          noofpayments?: number | null
          Notes?: string | null
          OpportunityID?: number | null
          opportunityids?: string | null
          payment1percentage?: number | null
          payment2date?: string | null
          payment2percentage?: number | null
          payment3date?: string | null
          payment3percentage?: number | null
          PaymentTerms?: string | null
          Percentage?: number | null
          pricematchguarantee?: number | null
          PriceTag?: number | null
          pricingmodel?: string | null
          prime_company_id?: number | null
          prime_contact_id?: number | null
          QuotationDate?: string
          QuotationID?: number
          QuotationRef?: string | null
          QuotationRevisionNO?: number | null
          QuotationType?: string | null
          quoteprobability?: string | null
          ratelock?: number | null
          ReferenceName?: string | null
          remarks?: string | null
          shortquote?: number | null
          ShowAdditionalDetails?: number | null
          ShowNotes?: number | null
          ShowPricing?: number | null
          Status?: number | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          UserID?: number
          Validity?: string | null
        }
        Relationships: []
      }
      core_quotationcartedlist_stg: {
        Row: {
          amount: number | null
          amountinusd: number | null
          companyid: number | null
          discount: number | null
          discountinusd: number | null
          duration: string | null
          itemid: number | null
          itemname: string | null
          itemtype: string | null
          optionid: number | null
          qty: string | null
          quotationid: number | null
          showiteminpdf: number | null
          Trid: number
          unitprice: number | null
          unitpriceinusd: number | null
        }
        Insert: {
          amount?: number | null
          amountinusd?: number | null
          companyid?: number | null
          discount?: number | null
          discountinusd?: number | null
          duration?: string | null
          itemid?: number | null
          itemname?: string | null
          itemtype?: string | null
          optionid?: number | null
          qty?: string | null
          quotationid?: number | null
          showiteminpdf?: number | null
          Trid: number
          unitprice?: number | null
          unitpriceinusd?: number | null
        }
        Update: {
          amount?: number | null
          amountinusd?: number | null
          companyid?: number | null
          discount?: number | null
          discountinusd?: number | null
          duration?: string | null
          itemid?: number | null
          itemname?: string | null
          itemtype?: string | null
          optionid?: number | null
          qty?: string | null
          quotationid?: number | null
          showiteminpdf?: number | null
          Trid?: number
          unitprice?: number | null
          unitpriceinusd?: number | null
        }
        Relationships: []
      }
      core_quotationoptions_stg: {
        Row: {
          ActivePrjCnt: number | null
          AnalysePacks: string | null
          analysesetid: string | null
          apiannualintegrationamount: number | null
          apiintegration: number | null
          apiintegrationamount: number | null
          combodiscountincluded: number | null
          combopackdiscount: number | null
          consultation: number | null
          consultationfee: number | null
          consultationsessions: number | null
          CustomItem: string | null
          CustomItemValue: number | null
          CustomSetIds: string | null
          Discount: number | null
          DiscountType: string | null
          DynamicChartsSetIds: string | null
          FreeMonths: number | null
          FreeUsers: number | null
          ibispack: number | null
          ibisuserlicencefee: number | null
          InactivePrjCnt: number | null
          InUSD: number | null
          IsAppOnly: number | null
          iscustomoption: number | null
          isFiveMillion: number | null
          MENACodes: string | null
          multipackdiscount: number | null
          multipackdiscountincluded: number | null
          multiyeardiscount: number | null
          Notes: string | null
          OptionID: string
          OptionValue: number | null
          PaidMonths: number | null
          PaidUsers: number | null
          PIActulaValue: number | null
          PICompGroups: number | null
          PIExportFlag: boolean | null
          PIMultiplier: number | null
          PIRowID: number | null
          PIUsers: number | null
          PIValue: number | null
          PIYears: number | null
          QuotationID: number
          QuoteDocumentID: number | null
          ReportSetIds: string | null
          researchpacks: string | null
          salesforceintegration: number | null
          salesforeceannualintegrationamount: number | null
          salesforeceintegrationamount: number | null
          SetIds: string | null
          TotalProjects: number | null
          Trid: number
          vatamount: number | null
          vatpercentage: number | null
          virtualuserlicence: number | null
          WOSupportUsers: number | null
        }
        Insert: {
          ActivePrjCnt?: number | null
          AnalysePacks?: string | null
          analysesetid?: string | null
          apiannualintegrationamount?: number | null
          apiintegration?: number | null
          apiintegrationamount?: number | null
          combodiscountincluded?: number | null
          combopackdiscount?: number | null
          consultation?: number | null
          consultationfee?: number | null
          consultationsessions?: number | null
          CustomItem?: string | null
          CustomItemValue?: number | null
          CustomSetIds?: string | null
          Discount?: number | null
          DiscountType?: string | null
          DynamicChartsSetIds?: string | null
          FreeMonths?: number | null
          FreeUsers?: number | null
          ibispack?: number | null
          ibisuserlicencefee?: number | null
          InactivePrjCnt?: number | null
          InUSD?: number | null
          IsAppOnly?: number | null
          iscustomoption?: number | null
          isFiveMillion?: number | null
          MENACodes?: string | null
          multipackdiscount?: number | null
          multipackdiscountincluded?: number | null
          multiyeardiscount?: number | null
          Notes?: string | null
          OptionID: string
          OptionValue?: number | null
          PaidMonths?: number | null
          PaidUsers?: number | null
          PIActulaValue?: number | null
          PICompGroups?: number | null
          PIExportFlag?: boolean | null
          PIMultiplier?: number | null
          PIRowID?: number | null
          PIUsers?: number | null
          PIValue?: number | null
          PIYears?: number | null
          QuotationID: number
          QuoteDocumentID?: number | null
          ReportSetIds?: string | null
          researchpacks?: string | null
          salesforceintegration?: number | null
          salesforeceannualintegrationamount?: number | null
          salesforeceintegrationamount?: number | null
          SetIds?: string | null
          TotalProjects?: number | null
          Trid: number
          vatamount?: number | null
          vatpercentage?: number | null
          virtualuserlicence?: number | null
          WOSupportUsers?: number | null
        }
        Update: {
          ActivePrjCnt?: number | null
          AnalysePacks?: string | null
          analysesetid?: string | null
          apiannualintegrationamount?: number | null
          apiintegration?: number | null
          apiintegrationamount?: number | null
          combodiscountincluded?: number | null
          combopackdiscount?: number | null
          consultation?: number | null
          consultationfee?: number | null
          consultationsessions?: number | null
          CustomItem?: string | null
          CustomItemValue?: number | null
          CustomSetIds?: string | null
          Discount?: number | null
          DiscountType?: string | null
          DynamicChartsSetIds?: string | null
          FreeMonths?: number | null
          FreeUsers?: number | null
          ibispack?: number | null
          ibisuserlicencefee?: number | null
          InactivePrjCnt?: number | null
          InUSD?: number | null
          IsAppOnly?: number | null
          iscustomoption?: number | null
          isFiveMillion?: number | null
          MENACodes?: string | null
          multipackdiscount?: number | null
          multipackdiscountincluded?: number | null
          multiyeardiscount?: number | null
          Notes?: string | null
          OptionID?: string
          OptionValue?: number | null
          PaidMonths?: number | null
          PaidUsers?: number | null
          PIActulaValue?: number | null
          PICompGroups?: number | null
          PIExportFlag?: boolean | null
          PIMultiplier?: number | null
          PIRowID?: number | null
          PIUsers?: number | null
          PIValue?: number | null
          PIYears?: number | null
          QuotationID?: number
          QuoteDocumentID?: number | null
          ReportSetIds?: string | null
          researchpacks?: string | null
          salesforceintegration?: number | null
          salesforeceannualintegrationamount?: number | null
          salesforeceintegrationamount?: number | null
          SetIds?: string | null
          TotalProjects?: number | null
          Trid?: number
          vatamount?: number | null
          vatpercentage?: number | null
          virtualuserlicence?: number | null
          WOSupportUsers?: number | null
        }
        Relationships: []
      }
      core_quotationoptionsdetail_stg: {
        Row: {
          category: string | null
          country: number | null
          optionid: number | null
          quotationid: number | null
          stage: string | null
          trid: number
          valuerange: string | null
        }
        Insert: {
          category?: string | null
          country?: number | null
          optionid?: number | null
          quotationid?: number | null
          stage?: string | null
          trid: number
          valuerange?: string | null
        }
        Update: {
          category?: string | null
          country?: number | null
          optionid?: number | null
          quotationid?: number | null
          stage?: string | null
          trid?: number
          valuerange?: string | null
        }
        Relationships: []
      }
      core_reminders_stg: {
        Row: {
          CompanyID: number
          ContactID: number | null
          DMS_row_id: number
          EnteredBy: number | null
          EnteredOn: string | null
          InteractID: string | null
          milestoneId: number | null
          Notes: string | null
          OpportunityID: number | null
          RemindDate: string | null
          ReminderID: number
          RemindStatus: string | null
          UpdatedBy: number | null
          UpdatedOn: string | null
          UserID: number
        }
        Insert: {
          CompanyID: number
          ContactID?: number | null
          DMS_row_id: number
          EnteredBy?: number | null
          EnteredOn?: string | null
          InteractID?: string | null
          milestoneId?: number | null
          Notes?: string | null
          OpportunityID?: number | null
          RemindDate?: string | null
          ReminderID: number
          RemindStatus?: string | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          UserID: number
        }
        Update: {
          CompanyID?: number
          ContactID?: number | null
          DMS_row_id?: number
          EnteredBy?: number | null
          EnteredOn?: string | null
          InteractID?: string | null
          milestoneId?: number | null
          Notes?: string | null
          OpportunityID?: number | null
          RemindDate?: string | null
          ReminderID?: number
          RemindStatus?: string | null
          UpdatedBy?: number | null
          UpdatedOn?: string | null
          UserID?: number
        }
        Relationships: []
      }
      core_subscription_invoiceno_stg: {
        Row: {
          company_id: number | null
          id: number | null
          invoiceid: number | null
          status: string | null
          syn_id: number | null
        }
        Insert: {
          company_id?: number | null
          id?: number | null
          invoiceid?: number | null
          status?: string | null
          syn_id?: number | null
        }
        Update: {
          company_id?: number | null
          id?: number | null
          invoiceid?: number | null
          status?: string | null
          syn_id?: number | null
        }
        Relationships: []
      }
      core_tasks_stg: {
        Row: {
          attachmentids: string | null
          closedby: number | null
          closedon: string | null
          companyid: number
          contactcodes: string | null
          description: string | null
          enteredby: number
          enteredon: string
          interactiontrid: number | null
          leadid: number | null
          opportunityids: string | null
          remarks: string | null
          subscriptiontrid: number | null
          targetid: number | null
          taskdate: string
          taskdetailid: number
          taskid: number
          taskowner: number
          taskstatus: string
          updatedby: number | null
          updatedon: string | null
          userengagementcontactid: number | null
        }
        Insert: {
          attachmentids?: string | null
          closedby?: number | null
          closedon?: string | null
          companyid: number
          contactcodes?: string | null
          description?: string | null
          enteredby: number
          enteredon: string
          interactiontrid?: number | null
          leadid?: number | null
          opportunityids?: string | null
          remarks?: string | null
          subscriptiontrid?: number | null
          targetid?: number | null
          taskdate: string
          taskdetailid: number
          taskid: number
          taskowner: number
          taskstatus: string
          updatedby?: number | null
          updatedon?: string | null
          userengagementcontactid?: number | null
        }
        Update: {
          attachmentids?: string | null
          closedby?: number | null
          closedon?: string | null
          companyid?: number
          contactcodes?: string | null
          description?: string | null
          enteredby?: number
          enteredon?: string
          interactiontrid?: number | null
          leadid?: number | null
          opportunityids?: string | null
          remarks?: string | null
          subscriptiontrid?: number | null
          targetid?: number | null
          taskdate?: string
          taskdetailid?: number
          taskid?: number
          taskowner?: number
          taskstatus?: string
          updatedby?: number | null
          updatedon?: string | null
          userengagementcontactid?: number | null
        }
        Relationships: []
      }
      core_verified_domain_approval_stg: {
        Row: {
          approvedby: number | null
          approvedon: string | null
          companycode: number
          domainname: string | null
          enteredby: number | null
          enteredon: string | null
          quotationid: number | null
          status: string | null
          TrID: number
          updatedby: number | null
          updatedon: string | null
        }
        Insert: {
          approvedby?: number | null
          approvedon?: string | null
          companycode: number
          domainname?: string | null
          enteredby?: number | null
          enteredon?: string | null
          quotationid?: number | null
          status?: string | null
          TrID: number
          updatedby?: number | null
          updatedon?: string | null
        }
        Update: {
          approvedby?: number | null
          approvedon?: string | null
          companycode?: number
          domainname?: string | null
          enteredby?: number | null
          enteredon?: string | null
          quotationid?: number | null
          status?: string | null
          TrID?: number
          updatedby?: number | null
          updatedon?: string | null
        }
        Relationships: []
      }
      countries: {
        Row: {
          country: string
          id: number
          zone_id: number | null
        }
        Insert: {
          country: string
          id?: number
          zone_id?: number | null
        }
        Update: {
          country?: string
          id?: number
          zone_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "countries_zone_id_fkey"
            columns: ["zone_id"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          },
        ]
      }
      countryvat: {
        Row: {
          countrycode: number | null
          quotationvatid: number
          vatpercentage: number | null
        }
        Insert: {
          countrycode?: number | null
          quotationvatid: number
          vatpercentage?: number | null
        }
        Update: {
          countrycode?: number | null
          quotationvatid?: number
          vatpercentage?: number | null
        }
        Relationships: []
      }
      dashboard_configs: {
        Row: {
          config: Json
          created_at: string | null
          dashboard_id: string
          id: string
          is_default: boolean | null
          name: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          config?: Json
          created_at?: string | null
          dashboard_id?: string
          id?: string
          is_default?: boolean | null
          name?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          config?: Json
          created_at?: string | null
          dashboard_id?: string
          id?: string
          is_default?: boolean | null
          name?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      dashboard_shares: {
        Row: {
          created_at: string | null
          dashboard_config_id: string
          id: string
          permission_level: string
          shared_by: string
          shared_with_user_id: string
        }
        Insert: {
          created_at?: string | null
          dashboard_config_id: string
          id?: string
          permission_level: string
          shared_by: string
          shared_with_user_id: string
        }
        Update: {
          created_at?: string | null
          dashboard_config_id?: string
          id?: string
          permission_level?: string
          shared_by?: string
          shared_with_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dashboard_shares_dashboard_config_id_fkey"
            columns: ["dashboard_config_id"]
            isOneToOne: false
            referencedRelation: "dashboard_configs"
            referencedColumns: ["id"]
          },
        ]
      }
      dataset_ids: {
        Row: {
          array_agg: number[] | null
        }
        Insert: {
          array_agg?: number[] | null
        }
        Update: {
          array_agg?: number[] | null
        }
        Relationships: []
      }
      datasets: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          filter_config: Json | null
          filter_type: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          filter_config?: Json | null
          filter_type?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          filter_config?: Json | null
          filter_type?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      dataupdate: {
        Row: {
          bncid: number | null
          primeid: number | null
        }
        Insert: {
          bncid?: number | null
          primeid?: number | null
        }
        Update: {
          bncid?: number | null
          primeid?: number | null
        }
        Relationships: []
      }
      departments: {
        Row: {
          code: string
          created_at: string | null
          created_by: string | null
          description: string | null
          display_order: number | null
          id: number
          is_active: boolean | null
          name: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          name: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      designationroles: {
        Row: {
          id: number
          role: string
        }
        Insert: {
          id?: number
          role: string
        }
        Update: {
          id?: number
          role?: string
        }
        Relationships: []
      }
      designations: {
        Row: {
          designame: string
          designationroleid: number | null
          id: number
        }
        Insert: {
          designame: string
          designationroleid?: number | null
          id?: number
        }
        Update: {
          designame?: string
          designationroleid?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "designations_designationroleid_fkey"
            columns: ["designationroleid"]
            isOneToOne: false
            referencedRelation: "designationroles"
            referencedColumns: ["id"]
          },
        ]
      }
      document_access_controls: {
        Row: {
          document_id: number
          expires_at: string | null
          granted_at: string | null
          granted_by: string
          id: number
          is_active: boolean | null
          permission_type: Database["public"]["Enums"]["document_permission_type"]
          role_id: number | null
          team_id: number | null
          user_id: string | null
        }
        Insert: {
          document_id: number
          expires_at?: string | null
          granted_at?: string | null
          granted_by: string
          id?: number
          is_active?: boolean | null
          permission_type: Database["public"]["Enums"]["document_permission_type"]
          role_id?: number | null
          team_id?: number | null
          user_id?: string | null
        }
        Update: {
          document_id?: number
          expires_at?: string | null
          granted_at?: string | null
          granted_by?: string
          id?: number
          is_active?: boolean | null
          permission_type?: Database["public"]["Enums"]["document_permission_type"]
          role_id?: number | null
          team_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_access_controls_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_metadata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_access_controls_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_access_controls_granted_by_fkey"
            columns: ["granted_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_access_controls_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_access_controls_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_access_controls_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_access_controls_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      document_access_logs: {
        Row: {
          action: string
          created_at: string
          document_id: number
          id: number
          ip_address: string | null
          permission_granted: boolean
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          document_id: number
          id?: number
          ip_address?: string | null
          permission_granted: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          document_id?: number
          id?: number
          ip_address?: string | null
          permission_granted?: boolean
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_access_logs_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_metadata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_access_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_access_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      document_approval_history: {
        Row: {
          action_at: string | null
          action_by: string | null
          action_type: string
          comments: string | null
          from_status:
            | Database["public"]["Enums"]["approval_step_status"]
            | null
          id: number
          metadata: Json | null
          step_id: number | null
          to_status: Database["public"]["Enums"]["approval_step_status"] | null
          workflow_id: number
        }
        Insert: {
          action_at?: string | null
          action_by?: string | null
          action_type: string
          comments?: string | null
          from_status?:
            | Database["public"]["Enums"]["approval_step_status"]
            | null
          id?: number
          metadata?: Json | null
          step_id?: number | null
          to_status?: Database["public"]["Enums"]["approval_step_status"] | null
          workflow_id: number
        }
        Update: {
          action_at?: string | null
          action_by?: string | null
          action_type?: string
          comments?: string | null
          from_status?:
            | Database["public"]["Enums"]["approval_step_status"]
            | null
          id?: number
          metadata?: Json | null
          step_id?: number | null
          to_status?: Database["public"]["Enums"]["approval_step_status"] | null
          workflow_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "document_approval_history_action_by_fkey"
            columns: ["action_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_approval_history_action_by_fkey"
            columns: ["action_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_approval_history_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "document_approval_steps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_approval_history_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "document_approval_workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      document_approval_steps: {
        Row: {
          actioned_at: string | null
          actioned_by: string | null
          approver_role_id: number | null
          approver_user_id: string | null
          comments: string | null
          deadline: string | null
          forwarded_at: string | null
          forwarded_reason: string | null
          forwarded_to_user_id: string | null
          id: number
          is_required: boolean | null
          status: Database["public"]["Enums"]["approval_step_status"] | null
          step_number: number
          workflow_id: number
        }
        Insert: {
          actioned_at?: string | null
          actioned_by?: string | null
          approver_role_id?: number | null
          approver_user_id?: string | null
          comments?: string | null
          deadline?: string | null
          forwarded_at?: string | null
          forwarded_reason?: string | null
          forwarded_to_user_id?: string | null
          id?: number
          is_required?: boolean | null
          status?: Database["public"]["Enums"]["approval_step_status"] | null
          step_number: number
          workflow_id: number
        }
        Update: {
          actioned_at?: string | null
          actioned_by?: string | null
          approver_role_id?: number | null
          approver_user_id?: string | null
          comments?: string | null
          deadline?: string | null
          forwarded_at?: string | null
          forwarded_reason?: string | null
          forwarded_to_user_id?: string | null
          id?: number
          is_required?: boolean | null
          status?: Database["public"]["Enums"]["approval_step_status"] | null
          step_number?: number
          workflow_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "document_approval_steps_actioned_by_fkey"
            columns: ["actioned_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_approval_steps_actioned_by_fkey"
            columns: ["actioned_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_approval_steps_approver_role_id_fkey"
            columns: ["approver_role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_approval_steps_approver_user_id_fkey"
            columns: ["approver_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_approval_steps_approver_user_id_fkey"
            columns: ["approver_user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_approval_steps_forwarded_to_user_id_fkey"
            columns: ["forwarded_to_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_approval_steps_forwarded_to_user_id_fkey"
            columns: ["forwarded_to_user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_approval_steps_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "document_approval_workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      document_approval_workflows: {
        Row: {
          approval_deadline: string | null
          approval_strategy:
            | Database["public"]["Enums"]["approval_strategy"]
            | null
          completed_at: string | null
          current_step: number | null
          document_version_id: number
          final_decision_at: string | null
          final_decision_by: string | null
          id: number
          initiated_at: string | null
          initiated_by: string
          requester_notes: string | null
          status: Database["public"]["Enums"]["approval_workflow_status"] | null
          total_steps: number
          workflow_name: string
        }
        Insert: {
          approval_deadline?: string | null
          approval_strategy?:
            | Database["public"]["Enums"]["approval_strategy"]
            | null
          completed_at?: string | null
          current_step?: number | null
          document_version_id: number
          final_decision_at?: string | null
          final_decision_by?: string | null
          id?: number
          initiated_at?: string | null
          initiated_by: string
          requester_notes?: string | null
          status?:
            | Database["public"]["Enums"]["approval_workflow_status"]
            | null
          total_steps: number
          workflow_name: string
        }
        Update: {
          approval_deadline?: string | null
          approval_strategy?:
            | Database["public"]["Enums"]["approval_strategy"]
            | null
          completed_at?: string | null
          current_step?: number | null
          document_version_id?: number
          final_decision_at?: string | null
          final_decision_by?: string | null
          id?: number
          initiated_at?: string | null
          initiated_by?: string
          requester_notes?: string | null
          status?:
            | Database["public"]["Enums"]["approval_workflow_status"]
            | null
          total_steps?: number
          workflow_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_approval_workflows_document_version_id_fkey"
            columns: ["document_version_id"]
            isOneToOne: false
            referencedRelation: "document_versions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_approval_workflows_final_decision_by_fkey"
            columns: ["final_decision_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_approval_workflows_final_decision_by_fkey"
            columns: ["final_decision_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_approval_workflows_initiated_by_fkey"
            columns: ["initiated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_approval_workflows_initiated_by_fkey"
            columns: ["initiated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      document_categories: {
        Row: {
          color: string | null
          created_at: string | null
          created_by: string | null
          department_id: number | null
          description: string | null
          icon: string | null
          id: number
          is_active: boolean | null
          name: string
          parent_category_id: number | null
          product_id: number
          reference_number: string | null
          reference_sequence: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          department_id?: number | null
          description?: string | null
          icon?: string | null
          id?: number
          is_active?: boolean | null
          name: string
          parent_category_id?: number | null
          product_id: number
          reference_number?: string | null
          reference_sequence?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          department_id?: number | null
          description?: string | null
          icon?: string | null
          id?: number
          is_active?: boolean | null
          name?: string
          parent_category_id?: number | null
          product_id?: number
          reference_number?: string | null
          reference_sequence?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_categories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_categories_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_categories_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_categories_parent_category_id_fkey"
            columns: ["parent_category_id"]
            isOneToOne: false
            referencedRelation: "document_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_categories_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_categories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_categories_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      document_flow_history: {
        Row: {
          change_type: string | null
          changed_at: string
          changed_by: string | null
          document_id: number
          from_company_id: number | null
          from_contact_id: number | null
          from_flow_direction:
            | Database["public"]["Enums"]["document_flow_direction"]
            | null
          id: number
          metadata: Json | null
          notes: string | null
          to_company_id: number | null
          to_contact_id: number | null
          to_flow_direction: Database["public"]["Enums"]["document_flow_direction"]
        }
        Insert: {
          change_type?: string | null
          changed_at?: string
          changed_by?: string | null
          document_id: number
          from_company_id?: number | null
          from_contact_id?: number | null
          from_flow_direction?:
            | Database["public"]["Enums"]["document_flow_direction"]
            | null
          id?: number
          metadata?: Json | null
          notes?: string | null
          to_company_id?: number | null
          to_contact_id?: number | null
          to_flow_direction: Database["public"]["Enums"]["document_flow_direction"]
        }
        Update: {
          change_type?: string | null
          changed_at?: string
          changed_by?: string | null
          document_id?: number
          from_company_id?: number | null
          from_contact_id?: number | null
          from_flow_direction?:
            | Database["public"]["Enums"]["document_flow_direction"]
            | null
          id?: number
          metadata?: Json | null
          notes?: string | null
          to_company_id?: number | null
          to_contact_id?: number | null
          to_flow_direction?: Database["public"]["Enums"]["document_flow_direction"]
        }
        Relationships: [
          {
            foreignKeyName: "document_flow_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_flow_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_flow_history_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_metadata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_flow_history_from_contact_id_fkey"
            columns: ["from_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_flow_history_to_contact_id_fkey"
            columns: ["to_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      document_metadata: {
        Row: {
          category_id: number | null
          company_id: number | null
          confidentiality_level:
            | Database["public"]["Enums"]["confidentiality_level"]
            | null
          contact_id: number | null
          created_at: string | null
          created_by: string | null
          current_version_id: number | null
          department_id: number | null
          description: string | null
          document_type_id: number
          expiry_date: string | null
          flow_direction:
            | Database["public"]["Enums"]["document_flow_direction"]
            | null
          id: number
          is_company_mandatory: boolean | null
          is_public: boolean | null
          owner_id: string
          product_id: number
          reference_number: string | null
          retention_period_months: number | null
          status: Database["public"]["Enums"]["document_status"] | null
          tags: string[] | null
          title: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          category_id?: number | null
          company_id?: number | null
          confidentiality_level?:
            | Database["public"]["Enums"]["confidentiality_level"]
            | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          current_version_id?: number | null
          department_id?: number | null
          description?: string | null
          document_type_id: number
          expiry_date?: string | null
          flow_direction?:
            | Database["public"]["Enums"]["document_flow_direction"]
            | null
          id?: number
          is_company_mandatory?: boolean | null
          is_public?: boolean | null
          owner_id: string
          product_id: number
          reference_number?: string | null
          retention_period_months?: number | null
          status?: Database["public"]["Enums"]["document_status"] | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          category_id?: number | null
          company_id?: number | null
          confidentiality_level?:
            | Database["public"]["Enums"]["confidentiality_level"]
            | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          current_version_id?: number | null
          department_id?: number | null
          description?: string | null
          document_type_id?: number
          expiry_date?: string | null
          flow_direction?:
            | Database["public"]["Enums"]["document_flow_direction"]
            | null
          id?: number
          is_company_mandatory?: boolean | null
          is_public?: boolean | null
          owner_id?: string
          product_id?: number
          reference_number?: string | null
          retention_period_months?: number | null
          status?: Database["public"]["Enums"]["document_status"] | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_metadata_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "document_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_metadata_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_metadata_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_metadata_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_metadata_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_metadata_document_type_id_fkey"
            columns: ["document_type_id"]
            isOneToOne: false
            referencedRelation: "document_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_metadata_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_metadata_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_metadata_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_metadata_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_metadata_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_document_metadata_current_version"
            columns: ["current_version_id"]
            isOneToOne: false
            referencedRelation: "document_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      document_reference_sequences: {
        Row: {
          created_at: string | null
          department_id: number
          document_type_code: string
          id: number
          last_sequence: number | null
          updated_at: string | null
          year_month: string
        }
        Insert: {
          created_at?: string | null
          department_id: number
          document_type_code: string
          id?: number
          last_sequence?: number | null
          updated_at?: string | null
          year_month: string
        }
        Update: {
          created_at?: string | null
          department_id?: number
          document_type_code?: string
          id?: number
          last_sequence?: number | null
          updated_at?: string | null
          year_month?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_reference_sequences_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_reference_sequences_document_type_code_fkey"
            columns: ["document_type_code"]
            isOneToOne: false
            referencedRelation: "document_types"
            referencedColumns: ["code"]
          },
        ]
      }
      document_types: {
        Row: {
          code: string
          color: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: number
          is_active: boolean | null
          name: string
          product_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code: string
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: number
          is_active?: boolean | null
          name: string
          product_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: number
          is_active?: boolean | null
          name?: string
          product_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_types_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_types_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_types_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      document_versions: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          checksum: string | null
          document_id: number
          file_name: string
          file_path: string
          file_size_bytes: number
          file_type: string
          id: number
          is_current: boolean | null
          reference_number: string | null
          status: Database["public"]["Enums"]["document_status"] | null
          uploaded_at: string | null
          uploaded_by: string
          version_notes: string | null
          version_number: string
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          checksum?: string | null
          document_id: number
          file_name: string
          file_path: string
          file_size_bytes: number
          file_type: string
          id?: number
          is_current?: boolean | null
          reference_number?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          uploaded_at?: string | null
          uploaded_by: string
          version_notes?: string | null
          version_number: string
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          checksum?: string | null
          document_id?: number
          file_name?: string
          file_path?: string
          file_size_bytes?: number
          file_type?: string
          id?: number
          is_current?: boolean | null
          reference_number?: string | null
          status?: Database["public"]["Enums"]["document_status"] | null
          uploaded_at?: string | null
          uploaded_by?: string
          version_notes?: string | null
          version_number?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_versions_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_versions_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "document_versions_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_metadata"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "document_versions_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "document_versions_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      email_deliveries: {
        Row: {
          contact_id: number
          created_at: string | null
          error: string | null
          id: number
          job_id: number
          sent_at: string | null
          ses_message_id: string | null
          status: string
          to_email: string
          updated_at: string | null
        }
        Insert: {
          contact_id: number
          created_at?: string | null
          error?: string | null
          id?: never
          job_id: number
          sent_at?: string | null
          ses_message_id?: string | null
          status?: string
          to_email: string
          updated_at?: string | null
        }
        Update: {
          contact_id?: number
          created_at?: string | null
          error?: string | null
          id?: never
          job_id?: number
          sent_at?: string | null
          ses_message_id?: string | null
          status?: string
          to_email?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_deliveries_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_deliveries_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      email_job_followups: {
        Row: {
          created_at: string
          created_by: string | null
          custom_exclusions: Json | null
          days_after_parent: number
          engagement_segment: string
          followup_job_id: number
          generated_recipient_list_id: number | null
          generation_completed_at: string | null
          generation_error: string | null
          generation_scheduled_at: string | null
          generation_status: string | null
          id: number
          inherit_parent_exclusions: boolean
          parent_job_id: number
          sequence_order: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          custom_exclusions?: Json | null
          days_after_parent: number
          engagement_segment: string
          followup_job_id: number
          generated_recipient_list_id?: number | null
          generation_completed_at?: string | null
          generation_error?: string | null
          generation_scheduled_at?: string | null
          generation_status?: string | null
          id?: number
          inherit_parent_exclusions?: boolean
          parent_job_id: number
          sequence_order: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          custom_exclusions?: Json | null
          days_after_parent?: number
          engagement_segment?: string
          followup_job_id?: number
          generated_recipient_list_id?: number | null
          generation_completed_at?: string | null
          generation_error?: string | null
          generation_scheduled_at?: string | null
          generation_status?: string | null
          id?: number
          inherit_parent_exclusions?: boolean
          parent_job_id?: number
          sequence_order?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_job_followups_followup_job_id_fkey"
            columns: ["followup_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_job_followups_generated_recipient_list_id_fkey"
            columns: ["generated_recipient_list_id"]
            isOneToOne: false
            referencedRelation: "recipient_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_job_followups_parent_job_id_fkey"
            columns: ["parent_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      email_jobs: {
        Row: {
          batch_size: number
          created_at: string | null
          created_by: string | null
          email_template_id: number
          fallback_sender_email: string | null
          fallback_sender_name: string | null
          handler_type_fallback_chain: number[] | null
          handler_type_id: number | null
          id: number
          is_followup: boolean
          max_concurrency: number
          parent_job_id: number | null
          product_id: number
          recipient_list_id: number | null
          reply_to_email: string | null
          scheduled_at: string
          sender_profile_id: number | null
          status: string
          subcampaign_id: number
          throttle_per_second: number
          updated_at: string | null
          updated_by: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          window_end: string | null
          window_start: string | null
        }
        Insert: {
          batch_size?: number
          created_at?: string | null
          created_by?: string | null
          email_template_id: number
          fallback_sender_email?: string | null
          fallback_sender_name?: string | null
          handler_type_fallback_chain?: number[] | null
          handler_type_id?: number | null
          id?: never
          is_followup?: boolean
          max_concurrency?: number
          parent_job_id?: number | null
          product_id: number
          recipient_list_id?: number | null
          reply_to_email?: string | null
          scheduled_at: string
          sender_profile_id?: number | null
          status?: string
          subcampaign_id: number
          throttle_per_second?: number
          updated_at?: string | null
          updated_by?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          window_end?: string | null
          window_start?: string | null
        }
        Update: {
          batch_size?: number
          created_at?: string | null
          created_by?: string | null
          email_template_id?: number
          fallback_sender_email?: string | null
          fallback_sender_name?: string | null
          handler_type_fallback_chain?: number[] | null
          handler_type_id?: number | null
          id?: never
          is_followup?: boolean
          max_concurrency?: number
          parent_job_id?: number | null
          product_id?: number
          recipient_list_id?: number | null
          reply_to_email?: string | null
          scheduled_at?: string
          sender_profile_id?: number | null
          status?: string
          subcampaign_id?: number
          throttle_per_second?: number
          updated_at?: string | null
          updated_by?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          window_end?: string | null
          window_start?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_jobs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "email_jobs_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "email_jobs_email_template_id_fkey"
            columns: ["email_template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_handler_type_id_fkey"
            columns: ["handler_type_id"]
            isOneToOne: false
            referencedRelation: "company_handler_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_parent_job_id_fkey"
            columns: ["parent_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_recipient_list_id_fkey"
            columns: ["recipient_list_id"]
            isOneToOne: false
            referencedRelation: "recipient_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "sender_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_jobs_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "email_jobs_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      email_notification_logs: {
        Row: {
          created_at: string | null
          error_details: string | null
          id: number
          queue_id: number | null
          recipient_email: string
          sent_at: string | null
          ses_message_id: string | null
          ses_response: Json | null
          status: string
          template_code: string
          template_id: number | null
        }
        Insert: {
          created_at?: string | null
          error_details?: string | null
          id?: number
          queue_id?: number | null
          recipient_email: string
          sent_at?: string | null
          ses_message_id?: string | null
          ses_response?: Json | null
          status: string
          template_code: string
          template_id?: number | null
        }
        Update: {
          created_at?: string | null
          error_details?: string | null
          id?: number
          queue_id?: number | null
          recipient_email?: string
          sent_at?: string | null
          ses_message_id?: string | null
          ses_response?: Json | null
          status?: string
          template_code?: string
          template_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "email_notification_logs_queue_id_fkey"
            columns: ["queue_id"]
            isOneToOne: false
            referencedRelation: "email_notification_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_notification_logs_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "system_email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_notification_queue: {
        Row: {
          cc_email: string | null
          cc_name: string | null
          context_data: Json | null
          created_at: string | null
          environment: string | null
          error_message: string | null
          html_body: string
          id: number
          priority: string | null
          processed_at: string | null
          recipient_email: string
          recipient_name: string | null
          retry_count: number | null
          scheduled_at: string | null
          sender_email: string | null
          sender_name: string | null
          status: string | null
          subject: string
          template_code: string
          template_id: number | null
          text_body: string | null
          variables: Json | null
        }
        Insert: {
          cc_email?: string | null
          cc_name?: string | null
          context_data?: Json | null
          created_at?: string | null
          environment?: string | null
          error_message?: string | null
          html_body: string
          id?: number
          priority?: string | null
          processed_at?: string | null
          recipient_email: string
          recipient_name?: string | null
          retry_count?: number | null
          scheduled_at?: string | null
          sender_email?: string | null
          sender_name?: string | null
          status?: string | null
          subject: string
          template_code: string
          template_id?: number | null
          text_body?: string | null
          variables?: Json | null
        }
        Update: {
          cc_email?: string | null
          cc_name?: string | null
          context_data?: Json | null
          created_at?: string | null
          environment?: string | null
          error_message?: string | null
          html_body?: string
          id?: number
          priority?: string | null
          processed_at?: string | null
          recipient_email?: string
          recipient_name?: string | null
          retry_count?: number | null
          scheduled_at?: string | null
          sender_email?: string | null
          sender_name?: string | null
          status?: string | null
          subject?: string
          template_code?: string
          template_id?: number | null
          text_body?: string | null
          variables?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "email_notification_queue_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "system_email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_responses: {
        Row: {
          body_html: string | null
          body_text: string | null
          classification: string | null
          classification_confidence: number | null
          classification_reasoning: string | null
          contact_id: number | null
          created_at: string
          email_delivery_id: number | null
          email_job_id: number | null
          extracted_data: Json | null
          from_email: string
          from_name: string | null
          id: number
          is_auto_reply: boolean | null
          match_method: string | null
          processed_at: string | null
          product_id: number
          raw_payload: Json | null
          received_at: string
          status: string
          subcampaign_id: number | null
          subject: string | null
          to_email: string
          updated_at: string
        }
        Insert: {
          body_html?: string | null
          body_text?: string | null
          classification?: string | null
          classification_confidence?: number | null
          classification_reasoning?: string | null
          contact_id?: number | null
          created_at?: string
          email_delivery_id?: number | null
          email_job_id?: number | null
          extracted_data?: Json | null
          from_email: string
          from_name?: string | null
          id?: number
          is_auto_reply?: boolean | null
          match_method?: string | null
          processed_at?: string | null
          product_id: number
          raw_payload?: Json | null
          received_at?: string
          status?: string
          subcampaign_id?: number | null
          subject?: string | null
          to_email: string
          updated_at?: string
        }
        Update: {
          body_html?: string | null
          body_text?: string | null
          classification?: string | null
          classification_confidence?: number | null
          classification_reasoning?: string | null
          contact_id?: number | null
          created_at?: string
          email_delivery_id?: number | null
          email_job_id?: number | null
          extracted_data?: Json | null
          from_email?: string
          from_name?: string | null
          id?: number
          is_auto_reply?: boolean | null
          match_method?: string | null
          processed_at?: string | null
          product_id?: number
          raw_payload?: Json | null
          received_at?: string
          status?: string
          subcampaign_id?: number | null
          subject?: string | null
          to_email?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_responses_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_responses_email_delivery_id_fkey"
            columns: ["email_delivery_id"]
            isOneToOne: false
            referencedRelation: "email_deliveries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_responses_email_job_id_fkey"
            columns: ["email_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_responses_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_responses_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          category:
            | Database["public"]["Enums"]["email_template_category"]
            | null
          created_at: string | null
          created_by: string | null
          html: string
          id: number
          is_active: boolean | null
          last_used_at: string | null
          mjml_content: string | null
          name: string
          product_id: number
          subject: string
          tags: string[] | null
          text_fallback: string | null
          updated_at: string | null
          updated_by: string | null
          version: number | null
        }
        Insert: {
          category?:
            | Database["public"]["Enums"]["email_template_category"]
            | null
          created_at?: string | null
          created_by?: string | null
          html: string
          id?: never
          is_active?: boolean | null
          last_used_at?: string | null
          mjml_content?: string | null
          name: string
          product_id: number
          subject: string
          tags?: string[] | null
          text_fallback?: string | null
          updated_at?: string | null
          updated_by?: string | null
          version?: number | null
        }
        Update: {
          category?:
            | Database["public"]["Enums"]["email_template_category"]
            | null
          created_at?: string | null
          created_by?: string | null
          html?: string
          id?: never
          is_active?: boolean | null
          last_used_at?: string | null
          mjml_content?: string | null
          name?: string
          product_id?: number
          subject?: string
          tags?: string[] | null
          text_fallback?: string | null
          updated_at?: string | null
          updated_by?: string | null
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "email_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "email_templates_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "email_templates_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_templates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "email_templates_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      engagement_email_drafts: {
        Row: {
          agent_version: string | null
          body_html: string | null
          body_plain: string
          cc_emails: string[] | null
          company_id: number
          compliance_flag: boolean | null
          contact_id: number
          created_at: string | null
          created_by_user_id: string
          edited_at: string | null
          edited_by_user_id: string | null
          follow_up_days: number | null
          generation_rationale: Json | null
          gmail_message_id: string | null
          gmail_thread_id: string | null
          ibis_user_id: number | null
          id: string
          parent_draft_id: string | null
          response_due_by: string | null
          scenario: string
          scenario_version: number | null
          sent_at: string | null
          status: string | null
          subject: string
          task_id: number | null
          to_email: string
          trigger_payload: Json | null
          trigger_source: string
          updated_at: string | null
        }
        Insert: {
          agent_version?: string | null
          body_html?: string | null
          body_plain: string
          cc_emails?: string[] | null
          company_id: number
          compliance_flag?: boolean | null
          contact_id: number
          created_at?: string | null
          created_by_user_id: string
          edited_at?: string | null
          edited_by_user_id?: string | null
          follow_up_days?: number | null
          generation_rationale?: Json | null
          gmail_message_id?: string | null
          gmail_thread_id?: string | null
          ibis_user_id?: number | null
          id?: string
          parent_draft_id?: string | null
          response_due_by?: string | null
          scenario: string
          scenario_version?: number | null
          sent_at?: string | null
          status?: string | null
          subject: string
          task_id?: number | null
          to_email: string
          trigger_payload?: Json | null
          trigger_source: string
          updated_at?: string | null
        }
        Update: {
          agent_version?: string | null
          body_html?: string | null
          body_plain?: string
          cc_emails?: string[] | null
          company_id?: number
          compliance_flag?: boolean | null
          contact_id?: number
          created_at?: string | null
          created_by_user_id?: string
          edited_at?: string | null
          edited_by_user_id?: string | null
          follow_up_days?: number | null
          generation_rationale?: Json | null
          gmail_message_id?: string | null
          gmail_thread_id?: string | null
          ibis_user_id?: number | null
          id?: string
          parent_draft_id?: string | null
          response_due_by?: string | null
          scenario?: string
          scenario_version?: number | null
          sent_at?: string | null
          status?: string | null
          subject?: string
          task_id?: number | null
          to_email?: string
          trigger_payload?: Json | null
          trigger_source?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      engagement_email_events: {
        Row: {
          created_at: string | null
          created_by_user_id: string
          draft_id: string
          event_data: Json | null
          event_type: string
          id: string
        }
        Insert: {
          created_at?: string | null
          created_by_user_id: string
          draft_id: string
          event_data?: Json | null
          event_type: string
          id?: string
        }
        Update: {
          created_at?: string | null
          created_by_user_id?: string
          draft_id?: string
          event_data?: Json | null
          event_type?: string
          id?: string
        }
        Relationships: []
      }
      engagement_email_scenarios: {
        Row: {
          created_at: string | null
          default_subject_template: string | null
          description: string | null
          follow_up_days: number | null
          id: string
          intended_recipient: string | null
          is_active: boolean | null
          is_compliance_flagged: boolean | null
          name: string
          primary_objective: string | null
          prompt_template: string | null
          requires_value_hook: boolean | null
          tone: string | null
          updated_at: string | null
          version: number | null
          word_limit_max: number | null
          word_limit_min: number | null
        }
        Insert: {
          created_at?: string | null
          default_subject_template?: string | null
          description?: string | null
          follow_up_days?: number | null
          id: string
          intended_recipient?: string | null
          is_active?: boolean | null
          is_compliance_flagged?: boolean | null
          name: string
          primary_objective?: string | null
          prompt_template?: string | null
          requires_value_hook?: boolean | null
          tone?: string | null
          updated_at?: string | null
          version?: number | null
          word_limit_max?: number | null
          word_limit_min?: number | null
        }
        Update: {
          created_at?: string | null
          default_subject_template?: string | null
          description?: string | null
          follow_up_days?: number | null
          id?: string
          intended_recipient?: string | null
          is_active?: boolean | null
          is_compliance_flagged?: boolean | null
          name?: string
          primary_objective?: string | null
          prompt_template?: string | null
          requires_value_hook?: boolean | null
          tone?: string | null
          updated_at?: string | null
          version?: number | null
          word_limit_max?: number | null
          word_limit_min?: number | null
        }
        Relationships: []
      }
      engagement_events: {
        Row: {
          contact_id: number | null
          created_at: string | null
          email: string | null
          id: number
          ip: unknown
          job_id: number | null
          meta: Json | null
          occurred_at: string
          product_id: number
          subcampaign_id: number | null
          type: string
          updated_at: string | null
          url: string | null
          user_agent: string | null
        }
        Insert: {
          contact_id?: number | null
          created_at?: string | null
          email?: string | null
          id?: never
          ip?: unknown
          job_id?: number | null
          meta?: Json | null
          occurred_at?: string
          product_id: number
          subcampaign_id?: number | null
          type: string
          updated_at?: string | null
          url?: string | null
          user_agent?: string | null
        }
        Update: {
          contact_id?: number | null
          created_at?: string | null
          email?: string | null
          id?: never
          ip?: unknown
          job_id?: number | null
          meta?: Json | null
          occurred_at?: string
          product_id?: number
          subcampaign_id?: number | null
          type?: string
          updated_at?: string | null
          url?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "engagement_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "engagement_events_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "engagement_events_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "engagement_events_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      event_invitations: {
        Row: {
          calendly_cancel_url: string | null
          calendly_event_uri: string | null
          calendly_invitee_uri: string | null
          calendly_meeting_details: Json | null
          calendly_reschedule_url: string | null
          calendly_scheduled_at: string | null
          company_id: number
          contact_id: number
          created_at: string | null
          event_id: number
          id: number
          invitation_sent_at: string | null
          invitation_status: string
          invitation_token: string | null
          invited_at: string | null
          invited_by: string | null
          notes: string | null
          product_id: number
          response_date: string | null
          response_notes: string | null
          token_expires_at: string | null
          updated_at: string | null
        }
        Insert: {
          calendly_cancel_url?: string | null
          calendly_event_uri?: string | null
          calendly_invitee_uri?: string | null
          calendly_meeting_details?: Json | null
          calendly_reschedule_url?: string | null
          calendly_scheduled_at?: string | null
          company_id: number
          contact_id: number
          created_at?: string | null
          event_id: number
          id?: number
          invitation_sent_at?: string | null
          invitation_status?: string
          invitation_token?: string | null
          invited_at?: string | null
          invited_by?: string | null
          notes?: string | null
          product_id: number
          response_date?: string | null
          response_notes?: string | null
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Update: {
          calendly_cancel_url?: string | null
          calendly_event_uri?: string | null
          calendly_invitee_uri?: string | null
          calendly_meeting_details?: Json | null
          calendly_reschedule_url?: string | null
          calendly_scheduled_at?: string | null
          company_id?: number
          contact_id?: number
          created_at?: string | null
          event_id?: number
          id?: number
          invitation_sent_at?: string | null
          invitation_status?: string
          invitation_token?: string | null
          invited_at?: string | null
          invited_by?: string | null
          notes?: string | null
          product_id?: number
          response_date?: string | null
          response_notes?: string | null
          token_expires_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_invitations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_invitations_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_invitations_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      event_mappings: {
        Row: {
          calendar_event_id: number
          created_at: string
          external_etag: string | null
          external_event_id: string
          id: number
          integration_id: number
          last_synced_at: string
        }
        Insert: {
          calendar_event_id: number
          created_at?: string
          external_etag?: string | null
          external_event_id: string
          id?: never
          integration_id: number
          last_synced_at?: string
        }
        Update: {
          calendar_event_id?: number
          created_at?: string
          external_etag?: string | null
          external_event_id?: string
          id?: never
          integration_id?: number
          last_synced_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_mappings_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_mappings_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "calendar_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      event_pre_invitations: {
        Row: {
          approved_events: number[] | null
          city_id: number | null
          city_text: string | null
          company_id: number | null
          company_name: string | null
          contact_id: number | null
          country_id: number | null
          country_text: string | null
          created_at: string
          designation: string | null
          email: string
          first_name: string
          id: number
          last_name: string
          notes: string | null
          phone: string | null
          processed_at: string | null
          processed_by: string | null
          product_id: number
          rejection_reason: string | null
          requested_events: number[] | null
          source: string | null
          status: string
          theme_id: number | null
          updated_at: string
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          approved_events?: number[] | null
          city_id?: number | null
          city_text?: string | null
          company_id?: number | null
          company_name?: string | null
          contact_id?: number | null
          country_id?: number | null
          country_text?: string | null
          created_at?: string
          designation?: string | null
          email: string
          first_name: string
          id?: never
          last_name: string
          notes?: string | null
          phone?: string | null
          processed_at?: string | null
          processed_by?: string | null
          product_id: number
          rejection_reason?: string | null
          requested_events?: number[] | null
          source?: string | null
          status?: string
          theme_id?: number | null
          updated_at?: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          approved_events?: number[] | null
          city_id?: number | null
          city_text?: string | null
          company_id?: number | null
          company_name?: string | null
          contact_id?: number | null
          country_id?: number | null
          country_text?: string | null
          created_at?: string
          designation?: string | null
          email?: string
          first_name?: string
          id?: never
          last_name?: string
          notes?: string | null
          phone?: string | null
          processed_at?: string | null
          processed_by?: string | null
          product_id?: number
          rejection_reason?: string | null
          requested_events?: number[] | null
          source?: string | null
          status?: string
          theme_id?: number | null
          updated_at?: string
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_pre_invitations_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_pre_invitations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_pre_invitations_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_pre_invitations_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_pre_invitations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_pre_invitations_theme_id_fkey"
            columns: ["theme_id"]
            isOneToOne: false
            referencedRelation: "event_themes"
            referencedColumns: ["id"]
          },
        ]
      }
      event_sync_queue: {
        Row: {
          attempt_count: number | null
          calendar_event_id: number
          created_at: string | null
          id: number
          integration_id: number
          last_error: string | null
          next_retry_at: string | null
          updated_at: string | null
        }
        Insert: {
          attempt_count?: number | null
          calendar_event_id: number
          created_at?: string | null
          id?: number
          integration_id: number
          last_error?: string | null
          next_retry_at?: string | null
          updated_at?: string | null
        }
        Update: {
          attempt_count?: number | null
          calendar_event_id?: number
          created_at?: string | null
          id?: number
          integration_id?: number
          last_error?: string | null
          next_retry_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_sync_queue_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_sync_queue_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "calendar_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      event_themes: {
        Row: {
          code: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean | null
          name: string
          product_id: number
          updated_at: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name: string
          product_id: number
          updated_at?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          name?: string
          product_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_themes_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          calendly_enabled: boolean | null
          calendly_event_type_name: string | null
          calendly_event_type_uri: string | null
          calendly_scheduling_url: string | null
          code: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string
          event_name: string
          event_type: Database["public"]["Enums"]["event_type"]
          id: number
          location: Database["public"]["Enums"]["event_location"]
          product_id: number
          start_date: string
          status: string
          theme_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          calendly_enabled?: boolean | null
          calendly_event_type_name?: string | null
          calendly_event_type_uri?: string | null
          calendly_scheduling_url?: string | null
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date: string
          event_name: string
          event_type: Database["public"]["Enums"]["event_type"]
          id?: number
          location: Database["public"]["Enums"]["event_location"]
          product_id: number
          start_date: string
          status?: string
          theme_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          calendly_enabled?: boolean | null
          calendly_event_type_name?: string | null
          calendly_event_type_uri?: string | null
          calendly_scheduling_url?: string | null
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string
          event_name?: string
          event_type?: Database["public"]["Enums"]["event_type"]
          id?: number
          location?: Database["public"]["Enums"]["event_location"]
          product_id?: number
          start_date?: string
          status?: string
          theme_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_theme_id_fkey"
            columns: ["theme_id"]
            isOneToOne: false
            referencedRelation: "event_themes"
            referencedColumns: ["id"]
          },
        ]
      }
      exclusions: {
        Row: {
          created_at: string | null
          created_by: string | null
          exclusion_type: string | null
          id: number
          product_id: number
          subcampaign_id: number
          type: string
          updated_at: string | null
          updated_by: string | null
          value: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          exclusion_type?: string | null
          id?: never
          product_id: number
          subcampaign_id: number
          type: string
          updated_at?: string | null
          updated_by?: string | null
          value: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          exclusion_type?: string | null
          id?: never
          product_id?: number
          subcampaign_id?: number
          type?: string
          updated_at?: string | null
          updated_by?: string | null
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "exclusions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "exclusions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "exclusions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exclusions_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exclusions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "exclusions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      external_api_calls: {
        Row: {
          action: string | null
          created_at: string | null
          environment: string | null
          error_message: string | null
          execution_time_ms: number | null
          function_name: string
          id: number
          request_method: string | null
          request_payload: Json | null
          request_url: string | null
          response_payload: Json | null
          response_status: number | null
          success: boolean | null
          user_id: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string | null
          environment?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          function_name: string
          id?: number
          request_method?: string | null
          request_payload?: Json | null
          request_url?: string | null
          response_payload?: Json | null
          response_status?: number | null
          success?: boolean | null
          user_id?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string | null
          environment?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          function_name?: string
          id?: number
          request_method?: string | null
          request_payload?: Json | null
          request_url?: string | null
          response_payload?: Json | null
          response_status?: number | null
          success?: boolean | null
          user_id?: string | null
        }
        Relationships: []
      }
      handler_inactivity_warnings: {
        Row: {
          company_handler_id: number
          company_id: number
          created_at: string | null
          days_inactive: number | null
          email_sent_at: string | null
          handler_id: string
          id: number
          last_interaction_date: string | null
          removal_date: string
          removed_at: string | null
          status: string
          updated_at: string | null
          warning_level: number
        }
        Insert: {
          company_handler_id: number
          company_id: number
          created_at?: string | null
          days_inactive?: number | null
          email_sent_at?: string | null
          handler_id: string
          id?: number
          last_interaction_date?: string | null
          removal_date: string
          removed_at?: string | null
          status?: string
          updated_at?: string | null
          warning_level?: number
        }
        Update: {
          company_handler_id?: number
          company_id?: number
          created_at?: string | null
          days_inactive?: number | null
          email_sent_at?: string | null
          handler_id?: string
          id?: number
          last_interaction_date?: string | null
          removal_date?: string
          removed_at?: string | null
          status?: string
          updated_at?: string | null
          warning_level?: number
        }
        Relationships: [
          {
            foreignKeyName: "handler_inactivity_warnings_company_handler_id_fkey"
            columns: ["company_handler_id"]
            isOneToOne: false
            referencedRelation: "company_handlers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "handler_inactivity_warnings_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      ibispacks: {
        Row: {
          conditions: string | null
          country_pack: boolean
          description: string | null
          id: number
          is_custom: boolean
          name: string
          pack_price: number | null
          s3_image_url: string | null
          sector_pack: boolean
          short_description: string | null
          status: string
          summary: string | null
          why_buy_one: string | null
          why_buy_two: string | null
          zones: number[] | null
        }
        Insert: {
          conditions?: string | null
          country_pack: boolean
          description?: string | null
          id: number
          is_custom: boolean
          name: string
          pack_price?: number | null
          s3_image_url?: string | null
          sector_pack: boolean
          short_description?: string | null
          status: string
          summary?: string | null
          why_buy_one?: string | null
          why_buy_two?: string | null
          zones?: number[] | null
        }
        Update: {
          conditions?: string | null
          country_pack?: boolean
          description?: string | null
          id?: number
          is_custom?: boolean
          name?: string
          pack_price?: number | null
          s3_image_url?: string | null
          sector_pack?: boolean
          short_description?: string | null
          status?: string
          summary?: string | null
          why_buy_one?: string | null
          why_buy_two?: string | null
          zones?: number[] | null
        }
        Relationships: []
      }
      ibissubscription_logs: {
        Row: {
          change_type: string
          changed_fields: string[] | null
          description: string
          ibissubscription_id: number
          id: number
          meta: Json | null
          new_values: Json | null
          old_values: Json | null
          performed_at: string | null
          performed_by: string | null
          subscription_id: number | null
        }
        Insert: {
          change_type: string
          changed_fields?: string[] | null
          description: string
          ibissubscription_id: number
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number | null
        }
        Update: {
          change_type?: string
          changed_fields?: string[] | null
          description?: string
          ibissubscription_id?: number
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ibissubscription_logs_ibissubscription_id_fkey"
            columns: ["ibissubscription_id"]
            isOneToOne: false
            referencedRelation: "ibissubscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ibissubscription_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      ibissubscriptions: {
        Row: {
          created: string
          end_date: string
          extended_date: string | null
          id: number
          order_id: number | null
          pack_id: number
          start_date: string
          status: string
          subscribed_company: number
          subscription_id: number
          syn_id: number | null
        }
        Insert: {
          created: string
          end_date: string
          extended_date?: string | null
          id: number
          order_id?: number | null
          pack_id: number
          start_date: string
          status: string
          subscribed_company: number
          subscription_id: number
          syn_id?: number | null
        }
        Update: {
          created?: string
          end_date?: string
          extended_date?: string | null
          id?: number
          order_id?: number | null
          pack_id?: number
          start_date?: string
          status?: string
          subscribed_company?: number
          subscription_id?: number
          syn_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ibissubscriptions_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "ibispacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ibissubscriptions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      ibisusagelog: {
        Row: {
          call_from: string | null
          id: number
          ip: unknown
          log_date: string
          log_description: string | null
          log_type: string
          package_id: number
          result_count: number | null
          search_count: number | null
          search_id: string | null
          site_id: number
          source: string | null
          source_id: number | null
          stage_id: number | null
          subscribed_company: number
          sync_id: number | null
          system_info: string | null
          updated_at: string
          user_id: number
          version: number | null
        }
        Insert: {
          call_from?: string | null
          id: number
          ip?: unknown
          log_date: string
          log_description?: string | null
          log_type: string
          package_id: number
          result_count?: number | null
          search_count?: number | null
          search_id?: string | null
          site_id: number
          source?: string | null
          source_id?: number | null
          stage_id?: number | null
          subscribed_company: number
          sync_id?: number | null
          system_info?: string | null
          updated_at: string
          user_id: number
          version?: number | null
        }
        Update: {
          call_from?: string | null
          id?: number
          ip?: unknown
          log_date?: string
          log_description?: string | null
          log_type?: string
          package_id?: number
          result_count?: number | null
          search_count?: number | null
          search_id?: string | null
          site_id?: number
          source?: string | null
          source_id?: number | null
          stage_id?: number | null
          subscribed_company?: number
          sync_id?: number | null
          system_info?: string | null
          updated_at?: string
          user_id?: number
          version?: number | null
        }
        Relationships: []
      }
      ibisuser_status_log: {
        Row: {
          action_type: string
          company_id: number
          created_at: string
          created_by: string | null
          ibisuser_id: number
          id: number
          new_bi_user_right: string | null
          new_ibis_synergy_role: string | null
          new_package: number | null
          notes: string | null
          previous_bi_user_right: string | null
          previous_ibis_synergy_role: string | null
          previous_package: number | null
          reason: string
          subscription_id: number | null
        }
        Insert: {
          action_type: string
          company_id: number
          created_at?: string
          created_by?: string | null
          ibisuser_id: number
          id?: number
          new_bi_user_right?: string | null
          new_ibis_synergy_role?: string | null
          new_package?: number | null
          notes?: string | null
          previous_bi_user_right?: string | null
          previous_ibis_synergy_role?: string | null
          previous_package?: number | null
          reason: string
          subscription_id?: number | null
        }
        Update: {
          action_type?: string
          company_id?: number
          created_at?: string
          created_by?: string | null
          ibisuser_id?: number
          id?: number
          new_bi_user_right?: string | null
          new_ibis_synergy_role?: string | null
          new_package?: number | null
          notes?: string | null
          previous_bi_user_right?: string | null
          previous_ibis_synergy_role?: string | null
          previous_package?: number | null
          reason?: string
          subscription_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ibisuser_status_log_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ibisuser_status_log_ibisuser_id_fkey"
            columns: ["ibisuser_id"]
            isOneToOne: false
            referencedRelation: "ibisusers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ibisuser_status_log_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      ibisusers: {
        Row: {
          abuseblock_reason: string | null
          bi_user_right: string | null
          company_id: number | null
          contact_id: number | null
          created: string | null
          created_by: number | null
          created_on: string | null
          export: boolean
          ibis_synergy_role: string | null
          id: number
          is_developer: boolean
          is_downgraded: boolean | null
          is_using_app: boolean | null
          is_verified: number
          last_login: string | null
          mobile: string | null
          mobile_area_code: string | null
          mobile_country_code: string | null
          onboard_platform: string | null
          onboarding_date: string | null
          otp_verification: number
          package: number
          planttree_certificate_attached: boolean | null
          previous_package: number | null
          prime_company_id: number | null
          prime_contact_id: number | null
          profile_image: string | null
          skip_otp: boolean | null
          status: string | null
          updated: string | null
          updated_by: number | null
          updated_on: string | null
          username: string
        }
        Insert: {
          abuseblock_reason?: string | null
          bi_user_right?: string | null
          company_id?: number | null
          contact_id?: number | null
          created?: string | null
          created_by?: number | null
          created_on?: string | null
          export: boolean
          ibis_synergy_role?: string | null
          id?: number
          is_developer: boolean
          is_downgraded?: boolean | null
          is_using_app?: boolean | null
          is_verified: number
          last_login?: string | null
          mobile?: string | null
          mobile_area_code?: string | null
          mobile_country_code?: string | null
          onboard_platform?: string | null
          onboarding_date?: string | null
          otp_verification: number
          package: number
          planttree_certificate_attached?: boolean | null
          previous_package?: number | null
          prime_company_id?: number | null
          prime_contact_id?: number | null
          profile_image?: string | null
          skip_otp?: boolean | null
          status?: string | null
          updated?: string | null
          updated_by?: number | null
          updated_on?: string | null
          username: string
        }
        Update: {
          abuseblock_reason?: string | null
          bi_user_right?: string | null
          company_id?: number | null
          contact_id?: number | null
          created?: string | null
          created_by?: number | null
          created_on?: string | null
          export?: boolean
          ibis_synergy_role?: string | null
          id?: number
          is_developer?: boolean
          is_downgraded?: boolean | null
          is_using_app?: boolean | null
          is_verified?: number
          last_login?: string | null
          mobile?: string | null
          mobile_area_code?: string | null
          mobile_country_code?: string | null
          onboard_platform?: string | null
          onboarding_date?: string | null
          otp_verification?: number
          package?: number
          planttree_certificate_attached?: boolean | null
          previous_package?: number | null
          prime_company_id?: number | null
          prime_contact_id?: number | null
          profile_image?: string | null
          skip_otp?: boolean | null
          status?: string | null
          updated?: string | null
          updated_by?: number | null
          updated_on?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "ibisusers_prime_company_id_fkey"
            columns: ["prime_company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ibisusers_prime_contact_id_fkey"
            columns: ["prime_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      informationrequests: {
        Row: {
          approved_by_id: number | null
          approved_on: string | null
          case_reference: string
          closed_by_id: number | null
          closed_on: string | null
          content_type_id: number | null
          created: string
          created_by_id: number | null
          emailstatus: boolean
          emailstatus_cir: boolean
          emailtemplate: string | null
          ibis_ir_id: number | null
          id: number
          information_type: string | null
          ir_handler_id: number | null
          note: string | null
          object_id: number | null
          rejected_by_id: number | null
          rejected_on: string | null
          rejection_note: string | null
          request: string
          request_type_id: number
          resolution: string | null
          resolve_type: string | null
          status: string
          subject: string
          subscribed_company: number
          syn_id: number | null
          synced: boolean
          triggeremail: boolean
          turn_around_time: number | null
          updated: string
          updated_by_id: number | null
          user_id: number | null
        }
        Insert: {
          approved_by_id?: number | null
          approved_on?: string | null
          case_reference: string
          closed_by_id?: number | null
          closed_on?: string | null
          content_type_id?: number | null
          created: string
          created_by_id?: number | null
          emailstatus: boolean
          emailstatus_cir: boolean
          emailtemplate?: string | null
          ibis_ir_id?: number | null
          id: number
          information_type?: string | null
          ir_handler_id?: number | null
          note?: string | null
          object_id?: number | null
          rejected_by_id?: number | null
          rejected_on?: string | null
          rejection_note?: string | null
          request: string
          request_type_id: number
          resolution?: string | null
          resolve_type?: string | null
          status: string
          subject: string
          subscribed_company: number
          syn_id?: number | null
          synced: boolean
          triggeremail: boolean
          turn_around_time?: number | null
          updated: string
          updated_by_id?: number | null
          user_id?: number | null
        }
        Update: {
          approved_by_id?: number | null
          approved_on?: string | null
          case_reference?: string
          closed_by_id?: number | null
          closed_on?: string | null
          content_type_id?: number | null
          created?: string
          created_by_id?: number | null
          emailstatus?: boolean
          emailstatus_cir?: boolean
          emailtemplate?: string | null
          ibis_ir_id?: number | null
          id?: number
          information_type?: string | null
          ir_handler_id?: number | null
          note?: string | null
          object_id?: number | null
          rejected_by_id?: number | null
          rejected_on?: string | null
          rejection_note?: string | null
          request?: string
          request_type_id?: number
          resolution?: string | null
          resolve_type?: string | null
          status?: string
          subject?: string
          subscribed_company?: number
          syn_id?: number | null
          synced?: boolean
          triggeremail?: boolean
          turn_around_time?: number | null
          updated?: string
          updated_by_id?: number | null
          user_id?: number | null
        }
        Relationships: []
      }
      integration_pack_price_discount: {
        Row: {
          annual_price: number
          created_by: string | null
          created_on: string
          ibis_pack_id: number | null
          ibis_pack_name: string | null
          id: number
          integration_package_id: number | null
          integration_package_name: string | null
          multi_pack_discount: number
          one_time_setup_fee: number
          standalone_discount: number
          status: string
          subscribed_company: number
          updated_by: string | null
          updated_on: string
        }
        Insert: {
          annual_price?: number
          created_by?: string | null
          created_on?: string
          ibis_pack_id?: number | null
          ibis_pack_name?: string | null
          id?: number
          integration_package_id?: number | null
          integration_package_name?: string | null
          multi_pack_discount?: number
          one_time_setup_fee?: number
          standalone_discount?: number
          status?: string
          subscribed_company?: number
          updated_by?: string | null
          updated_on?: string
        }
        Update: {
          annual_price?: number
          created_by?: string | null
          created_on?: string
          ibis_pack_id?: number | null
          ibis_pack_name?: string | null
          id?: number
          integration_package_id?: number | null
          integration_package_name?: string | null
          multi_pack_discount?: number
          one_time_setup_fee?: number
          standalone_discount?: number
          status?: string
          subscribed_company?: number
          updated_by?: string | null
          updated_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "integration_pack_price_discount_ibis_pack_id_fkey"
            columns: ["ibis_pack_id"]
            isOneToOne: false
            referencedRelation: "ibispacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integration_pack_price_discount_integration_package_id_fkey"
            columns: ["integration_package_id"]
            isOneToOne: false
            referencedRelation: "integrationpacks"
            referencedColumns: ["integration_product_id"]
          },
        ]
      }
      integration_tokens: {
        Row: {
          access_token: string
          created_at: string
          id: number
          provider: Database["public"]["Enums"]["integration_provider"]
          refresh_token: string | null
          scope: string[] | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string
          id?: never
          provider: Database["public"]["Enums"]["integration_provider"]
          refresh_token?: string | null
          scope?: string[] | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string
          id?: never
          provider?: Database["public"]["Enums"]["integration_provider"]
          refresh_token?: string | null
          scope?: string[] | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      integrationpacks: {
        Row: {
          aws_image_path: string | null
          description: string | null
          Display_On_Air: number | null
          entered_by: number | null
          entered_on: string | null
          integration_product_id: number
          product_name: string | null
          product_status: string | null
          short_description: string | null
          summary: string | null
          updated_by: number | null
          updated_on: string | null
          whybuyone: string | null
          whybuytwo: string | null
        }
        Insert: {
          aws_image_path?: string | null
          description?: string | null
          Display_On_Air?: number | null
          entered_by?: number | null
          entered_on?: string | null
          integration_product_id: number
          product_name?: string | null
          product_status?: string | null
          short_description?: string | null
          summary?: string | null
          updated_by?: number | null
          updated_on?: string | null
          whybuyone?: string | null
          whybuytwo?: string | null
        }
        Update: {
          aws_image_path?: string | null
          description?: string | null
          Display_On_Air?: number | null
          entered_by?: number | null
          entered_on?: string | null
          integration_product_id?: number
          product_name?: string | null
          product_status?: string | null
          short_description?: string | null
          summary?: string | null
          updated_by?: number | null
          updated_on?: string | null
          whybuyone?: string | null
          whybuytwo?: string | null
        }
        Relationships: []
      }
      integrationsubscription_logs: {
        Row: {
          change_type: string
          changed_fields: string[] | null
          description: string
          id: number
          integrationsubscription_id: number
          meta: Json | null
          new_values: Json | null
          old_values: Json | null
          performed_at: string | null
          performed_by: string | null
          subscription_id: number | null
        }
        Insert: {
          change_type: string
          changed_fields?: string[] | null
          description: string
          id?: number
          integrationsubscription_id: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number | null
        }
        Update: {
          change_type?: string
          changed_fields?: string[] | null
          description?: string
          id?: number
          integrationsubscription_id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrationsubscription_logs_integrationsubscription_id_fkey"
            columns: ["integrationsubscription_id"]
            isOneToOne: false
            referencedRelation: "integrationsubscriptions"
            referencedColumns: ["integration_subscription_id"]
          },
          {
            foreignKeyName: "integrationsubscription_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      integrationsubscriptions: {
        Row: {
          end_date: string | null
          entered_by: number | null
          entered_on: string | null
          extended_upto: string | null
          integration_id: number
          integration_subscription_id: number
          start_date: string | null
          status: string | null
          subscription_id: number
          updated_by: number | null
          updated_on: string | null
        }
        Insert: {
          end_date?: string | null
          entered_by?: number | null
          entered_on?: string | null
          extended_upto?: string | null
          integration_id: number
          integration_subscription_id: number
          start_date?: string | null
          status?: string | null
          subscription_id: number
          updated_by?: number | null
          updated_on?: string | null
        }
        Update: {
          end_date?: string | null
          entered_by?: number | null
          entered_on?: string | null
          extended_upto?: string | null
          integration_id?: number
          integration_subscription_id?: number
          start_date?: string | null
          status?: string | null
          subscription_id?: number
          updated_by?: number | null
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integrationsubscriptions_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "integrationpacks"
            referencedColumns: ["integration_product_id"]
          },
          {
            foreignKeyName: "integrationsubscriptions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      interaction_types: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      interactioncompanies: {
        Row: {
          company_id: number
          created: string
          id: number
          interaction_id: number
          subscribed_company: number
          updated: string
        }
        Insert: {
          company_id: number
          created: string
          id: number
          interaction_id: number
          subscribed_company: number
          updated: string
        }
        Update: {
          company_id?: number
          created?: string
          id?: number
          interaction_id?: number
          subscribed_company?: number
          updated?: string
        }
        Relationships: [
          {
            foreignKeyName: "interactioncompanies_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactioncompanies_interaction_id_fkey"
            columns: ["interaction_id"]
            isOneToOne: false
            referencedRelation: "interactions"
            referencedColumns: ["id"]
          },
        ]
      }
      interactioncontacts: {
        Row: {
          contact_id: number
          created: string
          id: number
          interaction_id: number
          subscribed_company: number
          updated: string
        }
        Insert: {
          contact_id: number
          created: string
          id: number
          interaction_id: number
          subscribed_company: number
          updated: string
        }
        Update: {
          contact_id?: number
          created?: string
          id?: number
          interaction_id?: number
          subscribed_company?: number
          updated?: string
        }
        Relationships: [
          {
            foreignKeyName: "interactioncontacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "interactioncontacts_interaction_id_fkey"
            columns: ["interaction_id"]
            isOneToOne: false
            referencedRelation: "interactions"
            referencedColumns: ["id"]
          },
        ]
      }
      interactions: {
        Row: {
          analytic_content_id: number | null
          chat_subtype_status: string | null
          company_contact_id: number | null
          company_id: number | null
          created_at: string
          date: string | null
          html_interaction: string | null
          id: number
          interaction: string | null
          interaction_chat_subtype: string | null
          interaction_size: number | null
          interaction_type: number
          mail_unique_id: string | null
          not_speak_to_right_contact: boolean | null
          old_syn_id: number | null
          product_id: number | null
          project_id: number | null
          report_id: number | null
          source_interaction_type: number | null
          subscribed_company: number
          syn_id: number | null
          updated_at: string
          user_id: number
        }
        Insert: {
          analytic_content_id?: number | null
          chat_subtype_status?: string | null
          company_contact_id?: number | null
          company_id?: number | null
          created_at: string
          date?: string | null
          html_interaction?: string | null
          id: number
          interaction?: string | null
          interaction_chat_subtype?: string | null
          interaction_size?: number | null
          interaction_type: number
          mail_unique_id?: string | null
          not_speak_to_right_contact?: boolean | null
          old_syn_id?: number | null
          product_id?: number | null
          project_id?: number | null
          report_id?: number | null
          source_interaction_type?: number | null
          subscribed_company: number
          syn_id?: number | null
          updated_at: string
          user_id: number
        }
        Update: {
          analytic_content_id?: number | null
          chat_subtype_status?: string | null
          company_contact_id?: number | null
          company_id?: number | null
          created_at?: string
          date?: string | null
          html_interaction?: string | null
          id?: number
          interaction?: string | null
          interaction_chat_subtype?: string | null
          interaction_size?: number | null
          interaction_type?: number
          mail_unique_id?: string | null
          not_speak_to_right_contact?: boolean | null
          old_syn_id?: number | null
          product_id?: number | null
          project_id?: number | null
          report_id?: number | null
          source_interaction_type?: number | null
          subscribed_company?: number
          syn_id?: number | null
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "interactions_interaction_type_fkey"
            columns: ["interaction_type"]
            isOneToOne: false
            referencedRelation: "interaction_types"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_collections: {
        Row: {
          account_id: number | null
          amount: number
          approved_at: string | null
          approved_by: string | null
          booking_date: string | null
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          card_holder_name: string | null
          card_last_four: string | null
          card_type: string | null
          collection_date: string
          created_at: string
          created_by: string
          custom_address: string | null
          handler: string | null
          id: number
          invoice_id: number
          is_generated: boolean | null
          is_recurring: boolean | null
          notes: string | null
          owner_id: string | null
          payment_account: string | null
          payment_bank: string | null
          payment_date: string | null
          payment_reference: string | null
          payment_type: Database["public"]["Enums"]["payment_type"]
          receipt_id: number | null
          recurring_end_date: string | null
          recurring_frequency: string | null
          reference_number: string | null
          sent_at: string | null
          sent_by: string | null
          sent_status: string | null
          status: Database["public"]["Enums"]["collection_status"]
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          account_id?: number | null
          amount: number
          approved_at?: string | null
          approved_by?: string | null
          booking_date?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          card_holder_name?: string | null
          card_last_four?: string | null
          card_type?: string | null
          collection_date: string
          created_at?: string
          created_by: string
          custom_address?: string | null
          handler?: string | null
          id?: number
          invoice_id: number
          is_generated?: boolean | null
          is_recurring?: boolean | null
          notes?: string | null
          owner_id?: string | null
          payment_account?: string | null
          payment_bank?: string | null
          payment_date?: string | null
          payment_reference?: string | null
          payment_type: Database["public"]["Enums"]["payment_type"]
          receipt_id?: number | null
          recurring_end_date?: string | null
          recurring_frequency?: string | null
          reference_number?: string | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["collection_status"]
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          account_id?: number | null
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          booking_date?: string | null
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          card_holder_name?: string | null
          card_last_four?: string | null
          card_type?: string | null
          collection_date?: string
          created_at?: string
          created_by?: string
          custom_address?: string | null
          handler?: string | null
          id?: number
          invoice_id?: number
          is_generated?: boolean | null
          is_recurring?: boolean | null
          notes?: string | null
          owner_id?: string | null
          payment_account?: string | null
          payment_bank?: string | null
          payment_date?: string | null
          payment_reference?: string | null
          payment_type?: Database["public"]["Enums"]["payment_type"]
          receipt_id?: number | null
          recurring_end_date?: string | null
          recurring_frequency?: string | null
          reference_number?: string | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["collection_status"]
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoice_collections_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "collection_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_collections_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoice_collections_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoice_collections_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoice_collections_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoice_collections_handler_fkey"
            columns: ["handler"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoice_collections_handler_fkey"
            columns: ["handler"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoice_collections_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_collections_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoice_collections_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoice_collections_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoice_collections_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      invoices: {
        Row: {
          activated_at: string | null
          activated_by: string | null
          amount: number
          approved_at: string | null
          approved_by: string | null
          auto_generated_source: string | null
          auto_renewal: boolean
          cancellation_reason: string | null
          cancellation_requested_at: string | null
          cancellation_requested_by: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          collection_status: string | null
          company_id: number
          contact_id: number | null
          created_at: string
          created_by: string
          credit_applied: number | null
          credit_ledger_id: number | null
          currency: string
          custom_address: string | null
          exchange_rate: number | null
          gross_amount: number | null
          id: number
          invoice_date: string
          invoice_number: string | null
          is_auto_generated: boolean | null
          is_splitted: boolean | null
          notes: string | null
          owner_id: string | null
          payment_due_date: string | null
          po_amount: number | null
          po_date: string | null
          po_number: string | null
          proforma_id: number | null
          quotation_id: number | null
          quotation_option_id: number | null
          reference_number: string | null
          s3_url: string | null
          sent_at: string | null
          sent_by: string | null
          sent_status: string | null
          status: Database["public"]["Enums"]["invoice_status"]
          subscription_status: boolean | null
          updated_at: string
          updated_by: string | null
          vat_amount: number | null
        }
        Insert: {
          activated_at?: string | null
          activated_by?: string | null
          amount: number
          approved_at?: string | null
          approved_by?: string | null
          auto_generated_source?: string | null
          auto_renewal?: boolean
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          cancellation_requested_by?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          collection_status?: string | null
          company_id: number
          contact_id?: number | null
          created_at?: string
          created_by: string
          credit_applied?: number | null
          credit_ledger_id?: number | null
          currency?: string
          custom_address?: string | null
          exchange_rate?: number | null
          gross_amount?: number | null
          id?: number
          invoice_date?: string
          invoice_number?: string | null
          is_auto_generated?: boolean | null
          is_splitted?: boolean | null
          notes?: string | null
          owner_id?: string | null
          payment_due_date?: string | null
          po_amount?: number | null
          po_date?: string | null
          po_number?: string | null
          proforma_id?: number | null
          quotation_id?: number | null
          quotation_option_id?: number | null
          reference_number?: string | null
          s3_url?: string | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          subscription_status?: boolean | null
          updated_at?: string
          updated_by?: string | null
          vat_amount?: number | null
        }
        Update: {
          activated_at?: string | null
          activated_by?: string | null
          amount?: number
          approved_at?: string | null
          approved_by?: string | null
          auto_generated_source?: string | null
          auto_renewal?: boolean
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          cancellation_requested_by?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          collection_status?: string | null
          company_id?: number
          contact_id?: number | null
          created_at?: string
          created_by?: string
          credit_applied?: number | null
          credit_ledger_id?: number | null
          currency?: string
          custom_address?: string | null
          exchange_rate?: number | null
          gross_amount?: number | null
          id?: number
          invoice_date?: string
          invoice_number?: string | null
          is_auto_generated?: boolean | null
          is_splitted?: boolean | null
          notes?: string | null
          owner_id?: string | null
          payment_due_date?: string | null
          po_amount?: number | null
          po_date?: string | null
          po_number?: string | null
          proforma_id?: number | null
          quotation_id?: number | null
          quotation_option_id?: number | null
          reference_number?: string | null
          s3_url?: string | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          subscription_status?: boolean | null
          updated_at?: string
          updated_by?: string | null
          vat_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_activated_by_fkey"
            columns: ["activated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoices_activated_by_fkey"
            columns: ["activated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoices_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoices_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoices_credit_ledger_id_fkey"
            columns: ["credit_ledger_id"]
            isOneToOne: false
            referencedRelation: "company_credit_ledger"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoices_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "invoices_proforma_id_fkey"
            columns: ["proforma_id"]
            isOneToOne: false
            referencedRelation: "proforma_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_quotation_option_id_fkey"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "invoices_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      job_configurations: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          display_name: string
          id: number
          is_enabled: boolean | null
          job_name: string
          last_modified_at: string | null
          last_modified_by: string | null
          metadata: Json | null
          notification_on_failure: boolean | null
          notification_on_success: boolean | null
          notification_recipients: string[] | null
          override_email: string | null
          override_enabled: boolean | null
          schedule: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          display_name: string
          id?: number
          is_enabled?: boolean | null
          job_name: string
          last_modified_at?: string | null
          last_modified_by?: string | null
          metadata?: Json | null
          notification_on_failure?: boolean | null
          notification_on_success?: boolean | null
          notification_recipients?: string[] | null
          override_email?: string | null
          override_enabled?: boolean | null
          schedule: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          display_name?: string
          id?: number
          is_enabled?: boolean | null
          job_name?: string
          last_modified_at?: string | null
          last_modified_by?: string | null
          metadata?: Json | null
          notification_on_failure?: boolean | null
          notification_on_success?: boolean | null
          notification_recipients?: string[] | null
          override_email?: string | null
          override_enabled?: boolean | null
          schedule?: string
        }
        Relationships: []
      }
      journeys: {
        Row: {
          active: boolean
          created_at: string | null
          created_by: string | null
          delay_seconds: number
          followup_template_id: number
          id: number
          name: string
          product_id: number
          rule: string
          sender_profile_id: number
          subcampaign_id: number
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          created_by?: string | null
          delay_seconds?: number
          followup_template_id: number
          id?: never
          name: string
          product_id: number
          rule: string
          sender_profile_id: number
          subcampaign_id: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string | null
          created_by?: string | null
          delay_seconds?: number
          followup_template_id?: number
          id?: never
          name?: string
          product_id?: number
          rule?: string
          sender_profile_id?: number
          subcampaign_id?: number
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journeys_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "journeys_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "journeys_followup_template_id_fkey"
            columns: ["followup_template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journeys_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journeys_sender_profile_id_fkey"
            columns: ["sender_profile_id"]
            isOneToOne: false
            referencedRelation: "sender_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journeys_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journeys_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "journeys_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      lead_notifications: {
        Row: {
          created_at: string
          id: number
          lead_data: Json
          lead_id: number
          read_at: string | null
          shown_to_user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          lead_data: Json
          lead_id: number
          read_at?: string | null
          shown_to_user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          lead_data?: Json
          lead_id?: number
          read_at?: string | null
          shown_to_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lead_notifications_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads_old1"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_void_trash_actions: {
        Row: {
          action_type: string
          actioned_at: string | null
          actioned_by: string | null
          additional_notes: string | null
          id: number
          lead_id: number
          product_id: number | null
          reason_id: number
        }
        Insert: {
          action_type: string
          actioned_at?: string | null
          actioned_by?: string | null
          additional_notes?: string | null
          id?: number
          lead_id: number
          product_id?: number | null
          reason_id: number
        }
        Update: {
          action_type?: string
          actioned_at?: string | null
          actioned_by?: string | null
          additional_notes?: string | null
          id?: number
          lead_id?: number
          product_id?: number | null
          reason_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "lead_void_trash_actions_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads_old1"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_void_trash_actions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_void_trash_actions_reason_id_fkey"
            columns: ["reason_id"]
            isOneToOne: false
            referencedRelation: "lead_void_trash_reasons"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_void_trash_reasons: {
        Row: {
          created_at: string | null
          id: number
          is_active: boolean | null
          reason: string
          reason_type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          reason: string
          reason_type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          is_active?: boolean | null
          reason?: string
          reason_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          bulletin_request: boolean
          bulletin_subscribed: boolean
          campaign_content: string | null
          campaign_lead: string | null
          campaign_medium: string | null
          city: string
          company: string
          company_id: number | null
          country_id: number
          created: string | null
          demo_requested: boolean
          designation: string
          email: string
          first_name: string
          ibis_lead_id: number | null
          id: number
          is_using_crm: boolean
          last_name: string | null
          lead_type: Database["public"]["Enums"]["lead_type_enum"] | null
          linked_company_id: number | null
          linked_contact_by: string | null
          linked_contact_id: number | null
          linked_contact_on: string | null
          linkedby: string | null
          linkedon: string | null
          mobile: string
          mobile_area: string
          mobile_country: string
          notes: string | null
          parameters: Json | null
          phone: string | null
          phone_area: string | null
          phone_country: string | null
          product_id: number | null
          pu_registration: boolean | null
          registered: string
          report_name: string | null
          source_page: string
          source_url: string | null
          status: Database["public"]["Enums"]["lead_status"] | null
          updated: string | null
        }
        Insert: {
          bulletin_request: boolean
          bulletin_subscribed: boolean
          campaign_content?: string | null
          campaign_lead?: string | null
          campaign_medium?: string | null
          city: string
          company: string
          company_id?: number | null
          country_id: number
          created?: string | null
          demo_requested: boolean
          designation: string
          email: string
          first_name: string
          ibis_lead_id?: number | null
          id: number
          is_using_crm: boolean
          last_name?: string | null
          lead_type?: Database["public"]["Enums"]["lead_type_enum"] | null
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile: string
          mobile_area: string
          mobile_country: string
          notes?: string | null
          parameters?: Json | null
          phone?: string | null
          phone_area?: string | null
          phone_country?: string | null
          product_id?: number | null
          pu_registration?: boolean | null
          registered: string
          report_name?: string | null
          source_page: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated?: string | null
        }
        Update: {
          bulletin_request?: boolean
          bulletin_subscribed?: boolean
          campaign_content?: string | null
          campaign_lead?: string | null
          campaign_medium?: string | null
          city?: string
          company?: string
          company_id?: number | null
          country_id?: number
          created?: string | null
          demo_requested?: boolean
          designation?: string
          email?: string
          first_name?: string
          ibis_lead_id?: number | null
          id?: number
          is_using_crm?: boolean
          last_name?: string | null
          lead_type?: Database["public"]["Enums"]["lead_type_enum"] | null
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile?: string
          mobile_area?: string
          mobile_country?: string
          notes?: string | null
          parameters?: Json | null
          phone?: string | null
          phone_area?: string | null
          phone_country?: string | null
          product_id?: number | null
          pu_registration?: boolean | null
          registered?: string
          report_name?: string | null
          source_page?: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_linked_company_id_fkey"
            columns: ["linked_company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_linked_contact_by_fkey"
            columns: ["linked_contact_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "leads_linked_contact_by_fkey"
            columns: ["linked_contact_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_linked_contact_id_fkey"
            columns: ["linked_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_linkedby_fkey"
            columns: ["linkedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "leads_linkedby_fkey"
            columns: ["linkedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      leads_log: {
        Row: {
          changed_at: string
          changed_by: string | null
          field_name: string | null
          id: number
          lead_id: number
          new_value: string | null
          new_values: Json | null
          old_value: string | null
          old_values: Json | null
          operation_type: string
          product_id: number
        }
        Insert: {
          changed_at?: string
          changed_by?: string | null
          field_name?: string | null
          id?: number
          lead_id: number
          new_value?: string | null
          new_values?: Json | null
          old_value?: string | null
          old_values?: Json | null
          operation_type?: string
          product_id: number
        }
        Update: {
          changed_at?: string
          changed_by?: string | null
          field_name?: string | null
          id?: number
          lead_id?: number
          new_value?: string | null
          new_values?: Json | null
          old_value?: string | null
          old_values?: Json | null
          operation_type?: string
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "leads_log_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "leads_log_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_log_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      leads_old1: {
        Row: {
          bulletin_request: boolean
          bulletin_subscribed: boolean
          campaign_content: string | null
          campaign_lead: string | null
          campaign_medium: string | null
          city: string
          company: string
          company_id: number | null
          country_id: number
          created: string | null
          demo_requested: boolean
          designation: string
          email: string
          first_name: string
          ibis_lead_id: number | null
          id: number
          is_using_crm: boolean
          last_name: string | null
          lead_type: Database["public"]["Enums"]["lead_type_enum"] | null
          linked_company_id: number | null
          linked_contact_by: string | null
          linked_contact_id: number | null
          linked_contact_on: string | null
          linkedby: string | null
          linkedon: string | null
          mobile: string
          mobile_area: string
          mobile_country: string
          notes: string | null
          parameters: Json | null
          phone: string | null
          phone_area: string | null
          phone_country: string | null
          product_id: number | null
          pu_registration: boolean | null
          registered: string
          report_name: string | null
          source_page: string
          source_url: string | null
          status: Database["public"]["Enums"]["lead_status"] | null
          updated: string | null
        }
        Insert: {
          bulletin_request: boolean
          bulletin_subscribed: boolean
          campaign_content?: string | null
          campaign_lead?: string | null
          campaign_medium?: string | null
          city: string
          company: string
          company_id?: number | null
          country_id: number
          created?: string | null
          demo_requested: boolean
          designation: string
          email: string
          first_name: string
          ibis_lead_id?: number | null
          id: number
          is_using_crm: boolean
          last_name?: string | null
          lead_type?: Database["public"]["Enums"]["lead_type_enum"] | null
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile: string
          mobile_area: string
          mobile_country: string
          notes?: string | null
          parameters?: Json | null
          phone?: string | null
          phone_area?: string | null
          phone_country?: string | null
          product_id?: number | null
          pu_registration?: boolean | null
          registered: string
          report_name?: string | null
          source_page: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated?: string | null
        }
        Update: {
          bulletin_request?: boolean
          bulletin_subscribed?: boolean
          campaign_content?: string | null
          campaign_lead?: string | null
          campaign_medium?: string | null
          city?: string
          company?: string
          company_id?: number | null
          country_id?: number
          created?: string | null
          demo_requested?: boolean
          designation?: string
          email?: string
          first_name?: string
          ibis_lead_id?: number | null
          id?: number
          is_using_crm?: boolean
          last_name?: string | null
          lead_type?: Database["public"]["Enums"]["lead_type_enum"] | null
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile?: string
          mobile_area?: string
          mobile_country?: string
          notes?: string | null
          parameters?: Json | null
          phone?: string | null
          phone_area?: string | null
          phone_country?: string | null
          product_id?: number | null
          pu_registration?: boolean | null
          registered?: string
          report_name?: string | null
          source_page?: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["lead_status"] | null
          updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_linked_company_id_fkey"
            columns: ["linked_company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_linked_contact_by_fkey"
            columns: ["linked_contact_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "leads_linked_contact_by_fkey"
            columns: ["linked_contact_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_linked_contact_id_fkey"
            columns: ["linked_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_linkedby_fkey"
            columns: ["linkedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "leads_linkedby_fkey"
            columns: ["linkedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "leads_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      leads2: {
        Row: {
          bulletin_request: boolean
          bulletin_subscribed: boolean
          campaign_content: string | null
          campaign_lead: string | null
          campaign_medium: string | null
          city: string
          company: string
          company_id: number | null
          country_id: number
          created: string | null
          demo_requested: boolean
          designation: string
          email: string
          first_name: string
          ibis_lead_id: number | null
          id: number
          is_using_crm: boolean
          last_name: string | null
          linked_company_id: number | null
          linked_contact_by: string | null
          linked_contact_id: number | null
          linked_contact_on: string | null
          linkedby: string | null
          linkedon: string | null
          mobile: string
          mobile_area: string
          mobile_country: string
          notes: string | null
          parameters: Json | null
          phone: string | null
          phone_area: string | null
          phone_country: string | null
          product_id: number | null
          pu_registration: boolean
          registered: string
          report_name: string | null
          source_page: string
          source_url: string | null
          status: Database["public"]["Enums"]["lead_status"]
          updated: string | null
        }
        Insert: {
          bulletin_request: boolean
          bulletin_subscribed: boolean
          campaign_content?: string | null
          campaign_lead?: string | null
          campaign_medium?: string | null
          city: string
          company: string
          company_id?: number | null
          country_id: number
          created?: string | null
          demo_requested: boolean
          designation: string
          email: string
          first_name: string
          ibis_lead_id?: number | null
          id: number
          is_using_crm: boolean
          last_name?: string | null
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile: string
          mobile_area: string
          mobile_country: string
          notes?: string | null
          parameters?: Json | null
          phone?: string | null
          phone_area?: string | null
          phone_country?: string | null
          product_id?: number | null
          pu_registration: boolean
          registered: string
          report_name?: string | null
          source_page: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          updated?: string | null
        }
        Update: {
          bulletin_request?: boolean
          bulletin_subscribed?: boolean
          campaign_content?: string | null
          campaign_lead?: string | null
          campaign_medium?: string | null
          city?: string
          company?: string
          company_id?: number | null
          country_id?: number
          created?: string | null
          demo_requested?: boolean
          designation?: string
          email?: string
          first_name?: string
          ibis_lead_id?: number | null
          id?: number
          is_using_crm?: boolean
          last_name?: string | null
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile?: string
          mobile_area?: string
          mobile_country?: string
          notes?: string | null
          parameters?: Json | null
          phone?: string | null
          phone_area?: string | null
          phone_country?: string | null
          product_id?: number | null
          pu_registration?: boolean
          registered?: string
          report_name?: string | null
          source_page?: string
          source_url?: string | null
          status?: Database["public"]["Enums"]["lead_status"]
          updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      menus: {
        Row: {
          created_at: string | null
          created_by: string | null
          display_order: number | null
          icon: string | null
          id: number
          is_active: boolean
          label: string
          mfe_name: string | null
          module_id: number | null
          parent_menu_id: number | null
          path: string
          sort_order: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          display_order?: number | null
          icon?: string | null
          id?: number
          is_active?: boolean
          label: string
          mfe_name?: string | null
          module_id?: number | null
          parent_menu_id?: number | null
          path: string
          sort_order?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          display_order?: number | null
          icon?: string | null
          id?: number
          is_active?: boolean
          label?: string
          mfe_name?: string | null
          module_id?: number | null
          parent_menu_id?: number | null
          path?: string
          sort_order?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "menus_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menus_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menus_parent_menu_id_fkey"
            columns: ["parent_menu_id"]
            isOneToOne: false
            referencedRelation: "menus"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menus_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      module_action_datasets: {
        Row: {
          action_id: number | null
          created_at: string | null
          created_by: string | null
          dataset_id: number | null
          id: number
          is_active: boolean | null
          is_default: boolean | null
          module_id: number | null
          product_id: number | null
          requires_dataset: boolean | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          action_id?: number | null
          created_at?: string | null
          created_by?: string | null
          dataset_id?: number | null
          id?: number
          is_active?: boolean | null
          is_default?: boolean | null
          module_id?: number | null
          product_id?: number | null
          requires_dataset?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          action_id?: number | null
          created_at?: string | null
          created_by?: string | null
          dataset_id?: number | null
          id?: number
          is_active?: boolean | null
          is_default?: boolean | null
          module_id?: number | null
          product_id?: number | null
          requires_dataset?: boolean | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "module_action_datasets_action_id_fkey"
            columns: ["action_id"]
            isOneToOne: false
            referencedRelation: "actions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_action_datasets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_action_datasets_dataset_id_fkey"
            columns: ["dataset_id"]
            isOneToOne: false
            referencedRelation: "datasets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_action_datasets_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_action_datasets_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_action_datasets_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          code: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean
          name: string
          parent_module_id: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean
          name: string
          parent_module_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean
          name?: string
          parent_module_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "modules_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "modules_parent_module_id_fkey"
            columns: ["parent_module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "modules_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      multiyear_invoice_log: {
        Row: {
          created_at: string | null
          created_by: string | null
          error_message: string | null
          generated_invoice_id: number
          id: number
          notification_sent: boolean | null
          notification_sent_at: string | null
          proforma_id: number
          status: string | null
          target_proforma_date: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          generated_invoice_id: number
          id?: number
          notification_sent?: boolean | null
          notification_sent_at?: string | null
          proforma_id: number
          status?: string | null
          target_proforma_date: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          generated_invoice_id?: number
          id?: number
          notification_sent?: boolean | null
          notification_sent_at?: string | null
          proforma_id?: number
          status?: string | null
          target_proforma_date?: string
        }
        Relationships: []
      }
      notification_settings: {
        Row: {
          id: number
          notifications_enabled: boolean
          override_email: string | null
          override_enabled: boolean
          override_reason: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          id?: number
          notifications_enabled?: boolean
          override_email?: string | null
          override_enabled?: boolean
          override_reason?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          id?: number
          notifications_enabled?: boolean
          override_email?: string | null
          override_enabled?: boolean
          override_reason?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      nucleus_agent_documents: {
        Row: {
          agent_id: string | null
          created_at: string | null
          document_id: string | null
          id: string
        }
        Insert: {
          agent_id?: string | null
          created_at?: string | null
          document_id?: string | null
          id?: string
        }
        Update: {
          agent_id?: string | null
          created_at?: string | null
          document_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "iris_agent_documents_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "nucleus_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "iris_agent_documents_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "nucleus_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_agent_tools: {
        Row: {
          agent_id: string | null
          config_overrides: Json | null
          created_at: string | null
          id: string
          is_enabled: boolean | null
          tool_id: string | null
        }
        Insert: {
          agent_id?: string | null
          config_overrides?: Json | null
          created_at?: string | null
          id?: string
          is_enabled?: boolean | null
          tool_id?: string | null
        }
        Update: {
          agent_id?: string | null
          config_overrides?: Json | null
          created_at?: string | null
          id?: string
          is_enabled?: boolean | null
          tool_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "iris_agent_tools_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "nucleus_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "iris_agent_tools_tool_id_fkey"
            columns: ["tool_id"]
            isOneToOne: false
            referencedRelation: "nucleus_tools"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_agents: {
        Row: {
          context: string | null
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          is_master: boolean | null
          max_tokens: number | null
          name: string
          parent_agent_id: string | null
          slug: string
          system_prompt: string
          temperature: number | null
          updated_at: string | null
        }
        Insert: {
          context?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_master?: boolean | null
          max_tokens?: number | null
          name: string
          parent_agent_id?: string | null
          slug: string
          system_prompt: string
          temperature?: number | null
          updated_at?: string | null
        }
        Update: {
          context?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_master?: boolean | null
          max_tokens?: number | null
          name?: string
          parent_agent_id?: string | null
          slug?: string
          system_prompt?: string
          temperature?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "nucleus_agents_parent_agent_id_fkey"
            columns: ["parent_agent_id"]
            isOneToOne: false
            referencedRelation: "nucleus_agents"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_api_keys: {
        Row: {
          allowed_origins: string[] | null
          api_key: string
          created_at: string | null
          created_by: string | null
          id: string
          is_active: boolean | null
          last_used_at: string | null
          metadata: Json | null
          partner_name: string
          rate_limit_per_minute: number | null
          updated_at: string | null
        }
        Insert: {
          allowed_origins?: string[] | null
          api_key: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          last_used_at?: string | null
          metadata?: Json | null
          partner_name: string
          rate_limit_per_minute?: number | null
          updated_at?: string | null
        }
        Update: {
          allowed_origins?: string[] | null
          api_key?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          last_used_at?: string | null
          metadata?: Json | null
          partner_name?: string
          rate_limit_per_minute?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      nucleus_approved_qa: {
        Row: {
          answer: string
          approved_by: string | null
          category: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          keywords: string[] | null
          question: string
          source_conversation_id: string | null
          source_message_id: string | null
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          answer: string
          approved_by?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          question: string
          source_conversation_id?: string | null
          source_message_id?: string | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          answer?: string
          approved_by?: string | null
          category?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          question?: string
          source_conversation_id?: string | null
          source_message_id?: string | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: []
      }
      nucleus_conversations: {
        Row: {
          created_at: string | null
          external_user_id: string | null
          id: string
          session_id: string | null
          source: string | null
          status: string | null
          title: string | null
          updated_at: string | null
          user_email: string | null
          user_id: string | null
          user_location: Json | null
          user_name: string | null
        }
        Insert: {
          created_at?: string | null
          external_user_id?: string | null
          id?: string
          session_id?: string | null
          source?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_email?: string | null
          user_id?: string | null
          user_location?: Json | null
          user_name?: string | null
        }
        Update: {
          created_at?: string | null
          external_user_id?: string | null
          id?: string
          session_id?: string | null
          source?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_email?: string | null
          user_id?: string | null
          user_location?: Json | null
          user_name?: string | null
        }
        Relationships: []
      }
      nucleus_documents: {
        Row: {
          content: string | null
          created_at: string | null
          file_path: string | null
          file_type: string | null
          id: string
          is_processed: boolean | null
          key_facts: Json | null
          key_topics: string[] | null
          keywords: string[] | null
          processed_content: string | null
          source_url: string | null
          summary: string | null
          title: string
          updated_at: string | null
          uploaded_by: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          file_path?: string | null
          file_type?: string | null
          id?: string
          is_processed?: boolean | null
          key_facts?: Json | null
          key_topics?: string[] | null
          keywords?: string[] | null
          processed_content?: string | null
          source_url?: string | null
          summary?: string | null
          title: string
          updated_at?: string | null
          uploaded_by: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          file_path?: string | null
          file_type?: string | null
          id?: string
          is_processed?: boolean | null
          key_facts?: Json | null
          key_topics?: string[] | null
          keywords?: string[] | null
          processed_content?: string | null
          source_url?: string | null
          summary?: string | null
          title?: string
          updated_at?: string | null
          uploaded_by?: string
        }
        Relationships: []
      }
      nucleus_flagged_qa: {
        Row: {
          admin_notes: string | null
          answer: string
          confidence_score: number | null
          created_at: string | null
          id: string
          is_reviewed: boolean | null
          message_id: string | null
          question: string
          reviewed_at: string | null
          reviewed_by: string | null
          user_id: string | null
        }
        Insert: {
          admin_notes?: string | null
          answer: string
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          is_reviewed?: boolean | null
          message_id?: string | null
          question: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          user_id?: string | null
        }
        Update: {
          admin_notes?: string | null
          answer?: string
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          is_reviewed?: boolean | null
          message_id?: string | null
          question?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "iris_flagged_qa_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "nucleus_widget_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_messages: {
        Row: {
          agent_name: string | null
          confidence_score: number | null
          content: string
          conversation_id: string
          created_at: string | null
          id: string
          is_flagged: boolean | null
          role: string
        }
        Insert: {
          agent_name?: string | null
          confidence_score?: number | null
          content: string
          conversation_id: string
          created_at?: string | null
          id?: string
          is_flagged?: boolean | null
          role: string
        }
        Update: {
          agent_name?: string | null
          confidence_score?: number | null
          content?: string
          conversation_id?: string
          created_at?: string | null
          id?: string
          is_flagged?: boolean | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "iris_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "nucleus_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_prompt_versions: {
        Row: {
          agent_id: string
          change_note: string | null
          created_at: string | null
          created_by: string | null
          id: string
          prompt: string
          version_number: number
        }
        Insert: {
          agent_id: string
          change_note?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          prompt: string
          version_number: number
        }
        Update: {
          agent_id?: string
          change_note?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          prompt?: string
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "nucleus_prompt_versions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "nucleus_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nucleus_prompt_versions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "nucleus_prompt_versions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      nucleus_settings: {
        Row: {
          auto_escalation_enabled: boolean
          cite_sources: boolean
          created_at: string
          id: string
          max_response_tokens: number
          primary_color: string
          response_temperature: number
          system_prompt: string
          updated_at: string
          use_knowledge_base: boolean
          welcome_message: string
          widget_position: string
          widget_title: string
        }
        Insert: {
          auto_escalation_enabled?: boolean
          cite_sources?: boolean
          created_at?: string
          id?: string
          max_response_tokens?: number
          primary_color?: string
          response_temperature?: number
          system_prompt: string
          updated_at?: string
          use_knowledge_base?: boolean
          welcome_message?: string
          widget_position?: string
          widget_title?: string
        }
        Update: {
          auto_escalation_enabled?: boolean
          cite_sources?: boolean
          created_at?: string
          id?: string
          max_response_tokens?: number
          primary_color?: string
          response_temperature?: number
          system_prompt?: string
          updated_at?: string
          use_knowledge_base?: boolean
          welcome_message?: string
          widget_position?: string
          widget_title?: string
        }
        Relationships: []
      }
      nucleus_tool_executions: {
        Row: {
          agent_id: string | null
          conversation_id: string | null
          created_at: string | null
          error_message: string | null
          execution_time_ms: number | null
          id: string
          input_params: Json | null
          message_id: string | null
          output_result: Json | null
          status: string | null
          tool_id: string | null
        }
        Insert: {
          agent_id?: string | null
          conversation_id?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          id?: string
          input_params?: Json | null
          message_id?: string | null
          output_result?: Json | null
          status?: string | null
          tool_id?: string | null
        }
        Update: {
          agent_id?: string | null
          conversation_id?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_time_ms?: number | null
          id?: string
          input_params?: Json | null
          message_id?: string | null
          output_result?: Json | null
          status?: string | null
          tool_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "iris_tool_executions_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "nucleus_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "iris_tool_executions_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "nucleus_conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "iris_tool_executions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "nucleus_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "iris_tool_executions_tool_id_fkey"
            columns: ["tool_id"]
            isOneToOne: false
            referencedRelation: "nucleus_tools"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_tools: {
        Row: {
          created_at: string | null
          description: string
          endpoint_url: string | null
          headers: Json | null
          id: string
          is_active: boolean | null
          name: string
          parameters_schema: Json
          requires_approval: boolean | null
          sample_output: Json | null
          slug: string
          tool_type: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description: string
          endpoint_url?: string | null
          headers?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          parameters_schema?: Json
          requires_approval?: boolean | null
          sample_output?: Json | null
          slug: string
          tool_type: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string
          endpoint_url?: string | null
          headers?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          parameters_schema?: Json
          requires_approval?: boolean | null
          sample_output?: Json | null
          slug?: string
          tool_type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      nucleus_widget_conversations: {
        Row: {
          assigned_agent_id: string | null
          context_complete: boolean | null
          created_at: string | null
          custom_fields: Json | null
          handoff_at: string | null
          handoff_reason: string | null
          id: string
          integration_id: string | null
          message_count: number | null
          session_id: string
          source_url: string | null
          status: string | null
          title: string | null
          updated_at: string | null
          user_avatar: string | null
          user_company: string | null
          user_email: string | null
          user_name: string | null
          user_plan: string | null
          user_plan_status: string | null
          user_role: string | null
          visitor_company: string | null
          visitor_context: Json | null
        }
        Insert: {
          assigned_agent_id?: string | null
          context_complete?: boolean | null
          created_at?: string | null
          custom_fields?: Json | null
          handoff_at?: string | null
          handoff_reason?: string | null
          id?: string
          integration_id?: string | null
          message_count?: number | null
          session_id: string
          source_url?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_company?: string | null
          user_email?: string | null
          user_name?: string | null
          user_plan?: string | null
          user_plan_status?: string | null
          user_role?: string | null
          visitor_company?: string | null
          visitor_context?: Json | null
        }
        Update: {
          assigned_agent_id?: string | null
          context_complete?: boolean | null
          created_at?: string | null
          custom_fields?: Json | null
          handoff_at?: string | null
          handoff_reason?: string | null
          id?: string
          integration_id?: string | null
          message_count?: number | null
          session_id?: string
          source_url?: string | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_company?: string | null
          user_email?: string | null
          user_name?: string | null
          user_plan?: string | null
          user_plan_status?: string | null
          user_role?: string | null
          visitor_company?: string | null
          visitor_context?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "iris_widget_conversations_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "nucleus_widget_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      nucleus_widget_integrations: {
        Row: {
          allowed_domains: string[] | null
          api_key: string
          api_secret: string
          created_at: string | null
          created_by: string
          id: string
          is_active: boolean | null
          name: string
          settings: Json | null
          updated_at: string | null
        }
        Insert: {
          allowed_domains?: string[] | null
          api_key: string
          api_secret: string
          created_at?: string | null
          created_by: string
          id?: string
          is_active?: boolean | null
          name: string
          settings?: Json | null
          updated_at?: string | null
        }
        Update: {
          allowed_domains?: string[] | null
          api_key?: string
          api_secret?: string
          created_at?: string | null
          created_by?: string
          id?: string
          is_active?: boolean | null
          name?: string
          settings?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      nucleus_widget_messages: {
        Row: {
          confidence_score: number | null
          content: string
          conversation_id: string
          created_at: string | null
          id: string
          is_flagged: boolean | null
          role: string
        }
        Insert: {
          confidence_score?: number | null
          content: string
          conversation_id: string
          created_at?: string | null
          id?: string
          is_flagged?: boolean | null
          role: string
        }
        Update: {
          confidence_score?: number | null
          content?: string
          conversation_id?: string
          created_at?: string | null
          id?: string
          is_flagged?: boolean | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "iris_widget_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "nucleus_widget_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_renewals: {
        Row: {
          analytics_packs: Json | null
          auto_renewal: boolean | null
          company_id: number
          created: string | null
          created_by_id: string | null
          end_date: string
          extended_date: string | null
          ibis_packs: Json | null
          id: number
          integration_packs: Json | null
          inv_no: number | null
          notes: string | null
          previous_subscription_id: number | null
          quotation_option_id: number | null
          research_packs: Json | null
          start_date: string
          status: string | null
          subscription_type: string | null
          user_count: number | null
        }
        Insert: {
          analytics_packs?: Json | null
          auto_renewal?: boolean | null
          company_id: number
          created?: string | null
          created_by_id?: string | null
          end_date: string
          extended_date?: string | null
          ibis_packs?: Json | null
          id?: number
          integration_packs?: Json | null
          inv_no?: number | null
          notes?: string | null
          previous_subscription_id?: number | null
          quotation_option_id?: number | null
          research_packs?: Json | null
          start_date: string
          status?: string | null
          subscription_type?: string | null
          user_count?: number | null
        }
        Update: {
          analytics_packs?: Json | null
          auto_renewal?: boolean | null
          company_id?: number
          created?: string | null
          created_by_id?: string | null
          end_date?: string
          extended_date?: string | null
          ibis_packs?: Json | null
          id?: number
          integration_packs?: Json | null
          inv_no?: number | null
          notes?: string | null
          previous_subscription_id?: number | null
          quotation_option_id?: number | null
          research_packs?: Json | null
          start_date?: string
          status?: string | null
          subscription_type?: string | null
          user_count?: number | null
        }
        Relationships: []
      }
      pricing_config_audit_log: {
        Row: {
          action: string
          change_reason: string | null
          changed_at: string
          changed_by: string | null
          changed_fields: string[] | null
          id: number
          new_values: Json | null
          old_values: Json | null
          record_id: number
          table_name: string
        }
        Insert: {
          action: string
          change_reason?: string | null
          changed_at?: string
          changed_by?: string | null
          changed_fields?: string[] | null
          id?: number
          new_values?: Json | null
          old_values?: Json | null
          record_id: number
          table_name: string
        }
        Update: {
          action?: string
          change_reason?: string | null
          changed_at?: string
          changed_by?: string | null
          changed_fields?: string[] | null
          id?: number
          new_values?: Json | null
          old_values?: Json | null
          record_id?: number
          table_name?: string
        }
        Relationships: []
      }
      primecontacts_stg: {
        Row: {
          id: number | null
          old_syn_id: number | null
          subscribed_company: number | null
        }
        Insert: {
          id?: number | null
          old_syn_id?: number | null
          subscribed_company?: number | null
        }
        Update: {
          id?: number | null
          old_syn_id?: number | null
          subscribed_company?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          name: string
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name: string
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          name?: string
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_created_by_fkey1"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "products_created_by_fkey1"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "products_updated_by_fkey1"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "products_updated_by_fkey1"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      proforma_invoices: {
        Row: {
          amount: number
          cancellation_reason: string | null
          cancellation_requested_at: string | null
          cancellation_requested_by: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          company_id: number
          contact_id: number | null
          created_at: string
          created_by: string
          credit_applied: number | null
          credit_ledger_id: number | null
          currency: string
          custom_address: string | null
          exchange_rate: number | null
          gross_amount: number | null
          id: number
          is_invoice_generated: boolean | null
          is_splitted: boolean | null
          notes: string | null
          owner_id: string | null
          payment_due_date: string | null
          pdf_generated_at: string | null
          pdf_url: string | null
          po_amount: number | null
          po_date: string | null
          po_number: string | null
          proforma_date: string
          proforma_number: string | null
          quotation_id: number | null
          quotation_option_id: number | null
          reference_number: string | null
          sent_at: string | null
          sent_by: string | null
          sent_status: string | null
          status: Database["public"]["Enums"]["proforma_status"]
          updated_at: string
          updated_by: string | null
          vat_amount: number | null
        }
        Insert: {
          amount: number
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          cancellation_requested_by?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          company_id: number
          contact_id?: number | null
          created_at?: string
          created_by: string
          credit_applied?: number | null
          credit_ledger_id?: number | null
          currency?: string
          custom_address?: string | null
          exchange_rate?: number | null
          gross_amount?: number | null
          id?: number
          is_invoice_generated?: boolean | null
          is_splitted?: boolean | null
          notes?: string | null
          owner_id?: string | null
          payment_due_date?: string | null
          pdf_generated_at?: string | null
          pdf_url?: string | null
          po_amount?: number | null
          po_date?: string | null
          po_number?: string | null
          proforma_date?: string
          proforma_number?: string | null
          quotation_id?: number | null
          quotation_option_id?: number | null
          reference_number?: string | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["proforma_status"]
          updated_at?: string
          updated_by?: string | null
          vat_amount?: number | null
        }
        Update: {
          amount?: number
          cancellation_reason?: string | null
          cancellation_requested_at?: string | null
          cancellation_requested_by?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          company_id?: number
          contact_id?: number | null
          created_at?: string
          created_by?: string
          credit_applied?: number | null
          credit_ledger_id?: number | null
          currency?: string
          custom_address?: string | null
          exchange_rate?: number | null
          gross_amount?: number | null
          id?: number
          is_invoice_generated?: boolean | null
          is_splitted?: boolean | null
          notes?: string | null
          owner_id?: string | null
          payment_due_date?: string | null
          pdf_generated_at?: string | null
          pdf_url?: string | null
          po_amount?: number | null
          po_date?: string | null
          po_number?: string | null
          proforma_date?: string
          proforma_number?: string | null
          quotation_id?: number | null
          quotation_option_id?: number | null
          reference_number?: string | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["proforma_status"]
          updated_at?: string
          updated_by?: string | null
          vat_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "proforma_invoices_cancelled_by_fkey"
            columns: ["cancelled_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_cancelled_by_fkey"
            columns: ["cancelled_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proforma_invoices_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proforma_invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_credit_ledger_id_fkey"
            columns: ["credit_ledger_id"]
            isOneToOne: false
            referencedRelation: "company_credit_ledger"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proforma_invoices_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proforma_invoices_quotation_option_id_fkey"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proforma_invoices_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "proforma_invoices_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      project_attribute: {
        Row: {
          data_type: string
          id: number
          name: string
          value_type: string | null
        }
        Insert: {
          data_type: string
          id: number
          name: string
          value_type?: string | null
        }
        Update: {
          data_type?: string
          id?: number
          name?: string
          value_type?: string | null
        }
        Relationships: []
      }
      project_attributeunit: {
        Row: {
          attribute_id: number | null
          id: number
          name: string
          project_subtype_id: number | null
        }
        Insert: {
          attribute_id?: number | null
          id: number
          name: string
          project_subtype_id?: number | null
        }
        Update: {
          attribute_id?: number | null
          id?: number
          name?: string
          project_subtype_id?: number | null
        }
        Relationships: []
      }
      project_attributevalue: {
        Row: {
          attribute_id: number
          id: number
          subscribed_company: number
          value: string
        }
        Insert: {
          attribute_id: number
          id: number
          subscribed_company: number
          value: string
        }
        Update: {
          attribute_id?: number
          id?: number
          subscribed_company?: number
          value?: string
        }
        Relationships: []
      }
      project_company_category_master: {
        Row: {
          category: string
          category_id: number
          cattype: string
          created_at: string | null
        }
        Insert: {
          category: string
          category_id: number
          cattype: string
          created_at?: string | null
        }
        Update: {
          category?: string
          category_id?: number
          cattype?: string
          created_at?: string | null
        }
        Relationships: []
      }
      project_constructionactivity: {
        Row: {
          activity: string | null
          category: string | null
          category_id: number | null
          created_on: string
          finish_period: number
          id: number
          percentage_of_total_construction: number
          percentage_of_total_duration: number
          percentage_spent: number
          start_period: number
          status: string | null
          updated_on: string
        }
        Insert: {
          activity?: string | null
          category?: string | null
          category_id?: number | null
          created_on: string
          finish_period: number
          id: number
          percentage_of_total_construction: number
          percentage_of_total_duration: number
          percentage_spent: number
          start_period: number
          status?: string | null
          updated_on: string
        }
        Update: {
          activity?: string | null
          category?: string | null
          category_id?: number | null
          created_on?: string
          finish_period?: number
          id?: number
          percentage_of_total_construction?: number
          percentage_of_total_duration?: number
          percentage_spent?: number
          start_period?: number
          status?: string | null
          updated_on?: string
        }
        Relationships: []
      }
      project_contractvaluerangedetail: {
        Row: {
          contract_value_range_id: number | null
          id: number
          new_subtype_id: number | null
          value_percentage: number
        }
        Insert: {
          contract_value_range_id?: number | null
          id: number
          new_subtype_id?: number | null
          value_percentage: number
        }
        Update: {
          contract_value_range_id?: number | null
          id?: number
          new_subtype_id?: number | null
          value_percentage?: number
        }
        Relationships: []
      }
      project_contractvaluerangemaster: {
        Row: {
          end_value: number
          id: number
          start_value: number
          status: string | null
          value_range: string | null
        }
        Insert: {
          end_value: number
          id: number
          start_value: number
          status?: string | null
          value_range?: string | null
        }
        Update: {
          end_value?: number
          id?: number
          start_value?: number
          status?: string | null
          value_range?: string | null
        }
        Relationships: []
      }
      project_newprojectsubtype: {
        Row: {
          id: number
          name: string
          project_type_id: number
          view_order: number
        }
        Insert: {
          id: number
          name: string
          project_type_id: number
          view_order: number
        }
        Update: {
          id?: number
          name?: string
          project_type_id?: number
          view_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_newprojectsubtype_project_type_id_fkey"
            columns: ["project_type_id"]
            isOneToOne: false
            referencedRelation: "project_newprojecttype"
            referencedColumns: ["id"]
          },
        ]
      }
      project_newprojecttype: {
        Row: {
          id: number
          name: string
          sector_id: number
          view_order: number
        }
        Insert: {
          id: number
          name: string
          sector_id: number
          view_order: number
        }
        Update: {
          id?: number
          name?: string
          sector_id?: number
          view_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "project_newprojecttype_sector_id_fkey"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "project_sector"
            referencedColumns: ["id"]
          },
        ]
      }
      project_projectdeletiongrade: {
        Row: {
          grade: number | null
          id: number
          name: string
          status: string
        }
        Insert: {
          grade?: number | null
          id: number
          name: string
          status: string
        }
        Update: {
          grade?: number | null
          id?: number
          name?: string
          status?: string
        }
        Relationships: []
      }
      project_projectdeletionreason: {
        Row: {
          id: number
          name: string
          status: string
        }
        Insert: {
          id: number
          name: string
          status: string
        }
        Update: {
          id?: number
          name?: string
          status?: string
        }
        Relationships: []
      }
      project_projectdeletionsubreason: {
        Row: {
          id: number
          name: string
          reason_id: number | null
          status: string
        }
        Insert: {
          id: number
          name: string
          reason_id?: number | null
          status: string
        }
        Update: {
          id?: number
          name?: string
          reason_id?: number | null
          status?: string
        }
        Relationships: []
      }
      project_projectsubstage: {
        Row: {
          id: number
          name: string
          sector_id: number | null
          stage_id: number | null
          status: string
        }
        Insert: {
          id: number
          name: string
          sector_id?: number | null
          stage_id?: number | null
          status: string
        }
        Update: {
          id?: number
          name?: string
          sector_id?: number | null
          stage_id?: number | null
          status?: string
        }
        Relationships: []
      }
      project_rejectioncriteria: {
        Row: {
          criteria: string
          id: number
          rejection_section_id: number | null
          status: string
        }
        Insert: {
          criteria: string
          id: number
          rejection_section_id?: number | null
          status: string
        }
        Update: {
          criteria?: string
          id?: number
          rejection_section_id?: number | null
          status?: string
        }
        Relationships: []
      }
      project_rejectionsection: {
        Row: {
          alias_name: string | null
          id: number
          name: string
          status: string
        }
        Insert: {
          alias_name?: string | null
          id: number
          name: string
          status: string
        }
        Update: {
          alias_name?: string | null
          id?: number
          name?: string
          status?: string
        }
        Relationships: []
      }
      project_role_category_mapping: {
        Row: {
          category_ids: number[]
          cattype: string | null
          created_at: string | null
          description: string | null
          id: number
          role_name: string
        }
        Insert: {
          category_ids?: number[]
          cattype?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          role_name: string
        }
        Update: {
          category_ids?: number[]
          cattype?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          role_name?: string
        }
        Relationships: []
      }
      project_schedule: {
        Row: {
          description: string | null
          id: number
          name: string
          schedule_for: string
          stage_id: number | null
        }
        Insert: {
          description?: string | null
          id: number
          name: string
          schedule_for: string
          stage_id?: number | null
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
          schedule_for?: string
          stage_id?: number | null
        }
        Relationships: []
      }
      project_sector: {
        Row: {
          description: string | null
          id: number
          name: string
          slug: string | null
          view_order: number
        }
        Insert: {
          description?: string | null
          id: number
          name: string
          slug?: string | null
          view_order: number
        }
        Update: {
          description?: string | null
          id?: number
          name?: string
          slug?: string | null
          view_order?: number
        }
        Relationships: []
      }
      project_signpost: {
        Row: {
          description: string
          entered_on: string
          id: number
          post_type: string
          text: string
        }
        Insert: {
          description: string
          entered_on: string
          id: number
          post_type: string
          text: string
        }
        Update: {
          description?: string
          entered_on?: string
          id?: number
          post_type?: string
          text?: string
        }
        Relationships: []
      }
      project_stage_sector_required_companies: {
        Row: {
          conditional_roles: Json | null
          created_at: string | null
          id: number
          mandatory_companies: string[] | null
          required_companies: string[] | null
          sector_id: number | null
          stage_id: number
          updated_at: string | null
          value_range: string
          verification_query: string | null
        }
        Insert: {
          conditional_roles?: Json | null
          created_at?: string | null
          id?: number
          mandatory_companies?: string[] | null
          required_companies?: string[] | null
          sector_id?: number | null
          stage_id: number
          updated_at?: string | null
          value_range?: string
          verification_query?: string | null
        }
        Update: {
          conditional_roles?: Json | null
          created_at?: string | null
          id?: number
          mandatory_companies?: string[] | null
          required_companies?: string[] | null
          sector_id?: number | null
          stage_id?: number
          updated_at?: string | null
          value_range?: string
          verification_query?: string | null
        }
        Relationships: []
      }
      project_stages: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      project_subtypeattribute: {
        Row: {
          action_trigger: number | null
          action_trigger_text: string | null
          attribute_id: number
          created_on: string
          id: number
          subtype_id: number
          type: string
        }
        Insert: {
          action_trigger?: number | null
          action_trigger_text?: string | null
          attribute_id: number
          created_on: string
          id: number
          subtype_id: number
          type: string
        }
        Update: {
          action_trigger?: number | null
          action_trigger_text?: string | null
          attribute_id?: number
          created_on?: string
          id?: number
          subtype_id?: number
          type?: string
        }
        Relationships: []
      }
      projectbidders: {
        Row: {
          added_on: string
          awarded_date: string | null
          bidding_date: string | null
          bidding_date_type: string | null
          bidding_status: string
          bidding_value: string | null
          bidding_value_type: string | null
          category_id: number
          changeset_id: number | null
          company_id: number
          contact_designation: string | null
          contact_id: number | null
          contact_name: string | null
          created: string | null
          created_by_id: number | null
          desigcode_id: number | null
          id: number
          is_qualified: boolean
          last_modified_on: string
          linked_bnc_projectbidder_id: number | null
          note: string | null
          old_syn_id: number | null
          project_id: number
          refurb_id: number | null
          scope: string | null
          subscribed_company: number
          syn_id: number | null
          unconfirmed: boolean | null
          updated: string | null
          updated_by_id: number | null
        }
        Insert: {
          added_on: string
          awarded_date?: string | null
          bidding_date?: string | null
          bidding_date_type?: string | null
          bidding_status: string
          bidding_value?: string | null
          bidding_value_type?: string | null
          category_id: number
          changeset_id?: number | null
          company_id: number
          contact_designation?: string | null
          contact_id?: number | null
          contact_name?: string | null
          created?: string | null
          created_by_id?: number | null
          desigcode_id?: number | null
          id: number
          is_qualified: boolean
          last_modified_on: string
          linked_bnc_projectbidder_id?: number | null
          note?: string | null
          old_syn_id?: number | null
          project_id: number
          refurb_id?: number | null
          scope?: string | null
          subscribed_company: number
          syn_id?: number | null
          unconfirmed?: boolean | null
          updated?: string | null
          updated_by_id?: number | null
        }
        Update: {
          added_on?: string
          awarded_date?: string | null
          bidding_date?: string | null
          bidding_date_type?: string | null
          bidding_status?: string
          bidding_value?: string | null
          bidding_value_type?: string | null
          category_id?: number
          changeset_id?: number | null
          company_id?: number
          contact_designation?: string | null
          contact_id?: number | null
          contact_name?: string | null
          created?: string | null
          created_by_id?: number | null
          desigcode_id?: number | null
          id?: number
          is_qualified?: boolean
          last_modified_on?: string
          linked_bnc_projectbidder_id?: number | null
          note?: string | null
          old_syn_id?: number | null
          project_id?: number
          refurb_id?: number | null
          scope?: string | null
          subscribed_company?: number
          syn_id?: number | null
          unconfirmed?: boolean | null
          updated?: string | null
          updated_by_id?: number | null
        }
        Relationships: []
      }
      projectcompanies: {
        Row: {
          award_date_type: string | null
          award_value_type: string | null
          awarded_date: string | null
          awarded_value: number | null
          category_id: number | null
          changeset_id: number | null
          company_id: number
          contact_designation: string | null
          contact_id: number | null
          contact_name: string | null
          contact2_designation: string | null
          contact2_id: number | null
          contact2_name: string | null
          contract_cancelled: boolean
          created: string
          created_by_id: number | null
          desigcode_id: number | null
          display: boolean
          email: string | null
          id: number
          linked_bnc_projectcompany_id: number | null
          note: string | null
          old_syn_id: number | null
          project_id: number
          refurb_id: number | null
          scope: string | null
          scope_completed: boolean
          site_office_area_code: string | null
          site_office_country_code: string | null
          site_office_phone_number: string | null
          site_phone: string | null
          status: string | null
          subscribed_company: number
          syn_id: number | null
          unconfirmed: boolean
          updated: string
          updated_by_id: number | null
          web: string | null
        }
        Insert: {
          award_date_type?: string | null
          award_value_type?: string | null
          awarded_date?: string | null
          awarded_value?: number | null
          category_id?: number | null
          changeset_id?: number | null
          company_id: number
          contact_designation?: string | null
          contact_id?: number | null
          contact_name?: string | null
          contact2_designation?: string | null
          contact2_id?: number | null
          contact2_name?: string | null
          contract_cancelled: boolean
          created: string
          created_by_id?: number | null
          desigcode_id?: number | null
          display: boolean
          email?: string | null
          id: number
          linked_bnc_projectcompany_id?: number | null
          note?: string | null
          old_syn_id?: number | null
          project_id: number
          refurb_id?: number | null
          scope?: string | null
          scope_completed: boolean
          site_office_area_code?: string | null
          site_office_country_code?: string | null
          site_office_phone_number?: string | null
          site_phone?: string | null
          status?: string | null
          subscribed_company: number
          syn_id?: number | null
          unconfirmed: boolean
          updated: string
          updated_by_id?: number | null
          web?: string | null
        }
        Update: {
          award_date_type?: string | null
          award_value_type?: string | null
          awarded_date?: string | null
          awarded_value?: number | null
          category_id?: number | null
          changeset_id?: number | null
          company_id?: number
          contact_designation?: string | null
          contact_id?: number | null
          contact_name?: string | null
          contact2_designation?: string | null
          contact2_id?: number | null
          contact2_name?: string | null
          contract_cancelled?: boolean
          created?: string
          created_by_id?: number | null
          desigcode_id?: number | null
          display?: boolean
          email?: string | null
          id?: number
          linked_bnc_projectcompany_id?: number | null
          note?: string | null
          old_syn_id?: number | null
          project_id?: number
          refurb_id?: number | null
          scope?: string | null
          scope_completed?: boolean
          site_office_area_code?: string | null
          site_office_country_code?: string | null
          site_office_phone_number?: string | null
          site_phone?: string | null
          status?: string | null
          subscribed_company?: number
          syn_id?: number | null
          unconfirmed?: boolean
          updated?: string
          updated_by_id?: number | null
          web?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_projectcompanies_company"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_projectcompanies_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projectcompanykeycontacts: {
        Row: {
          changeset_id: number | null
          contact_id: number
          created_by_id: number | null
          created_on: string | null
          id: number
          old_syn_id: number | null
          project_company_id: number
          subscribed_company: number
          syn_id: number | null
          updated_on: string
          visible: boolean
        }
        Insert: {
          changeset_id?: number | null
          contact_id: number
          created_by_id?: number | null
          created_on?: string | null
          id: number
          old_syn_id?: number | null
          project_company_id: number
          subscribed_company: number
          syn_id?: number | null
          updated_on: string
          visible: boolean
        }
        Update: {
          changeset_id?: number | null
          contact_id?: number
          created_by_id?: number | null
          created_on?: string | null
          id?: number
          old_syn_id?: number | null
          project_company_id?: number
          subscribed_company?: number
          syn_id?: number | null
          updated_on?: string
          visible?: boolean
        }
        Relationships: []
      }
      projectcontracttype: {
        Row: {
          contract_type: string
          id: number
          status: string
        }
        Insert: {
          contract_type: string
          id: number
          status: string
        }
        Update: {
          contract_type?: string
          id?: number
          status?: string
        }
        Relationships: []
      }
      projectdevelopmenttype: {
        Row: {
          development_type: string
          id: number
          status: string
        }
        Insert: {
          development_type: string
          id: number
          status: string
        }
        Update: {
          development_type?: string
          id?: number
          status?: string
        }
        Relationships: []
      }
      projectlog: {
        Row: {
          action: string
          description: string
          id: number
          new_data: Json | null
          old_data: Json | null
          old_syn_id: number | null
          performed_by_id: number | null
          record_id: number
          source: string
          timestamp: string
        }
        Insert: {
          action: string
          description: string
          id: number
          new_data?: Json | null
          old_data?: Json | null
          old_syn_id?: number | null
          performed_by_id?: number | null
          record_id: number
          source: string
          timestamp: string
        }
        Update: {
          action?: string
          description?: string
          id?: number
          new_data?: Json | null
          old_data?: Json | null
          old_syn_id?: number | null
          performed_by_id?: number | null
          record_id?: number
          source?: string
          timestamp?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_projectlog_project"
            columns: ["record_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          added_by_id: number | null
          ai_description: string | null
          alias_name: string | null
          arabic_name: string | null
          area: string | null
          area_unit: string | null
          bnc_project_number: string | null
          building_permit_number: string | null
          can_list: boolean
          changeset_id: number | null
          city_id: number
          citylocation_id: number | null
          completion_percentage: number | null
          contract_number: string | null
          contract_type_id: number | null
          created: string
          description: string | null
          development_type_id: number | null
          estimated_area: number | null
          estimated_completion_month: number | null
          estimated_completion_year: number | null
          hide_completion_percentage: number | null
          id: number
          latlongstring: string | null
          linked_bnc_project_id: number | null
          location: string | null
          name: string
          new_project_type_id: number | null
          new_subtype_id: number | null
          old_syn_id: number | null
          plot_number: string | null
          posted_on: string | null
          profile_type: string | null
          project_area_id: number | null
          project_country_id: number
          project_stage_id: number
          project_state_id: number | null
          reference_number: string | null
          s3_image_url: string | null
          sector_id: number | null
          slug: string | null
          spent_value: number
          state: string | null
          status_id: number | null
          subscribed_company: number
          substage_id: number | null
          syn_id: number | null
          tender_number: string | null
          total_key_contacts: number | null
          updated: string
          updated_by_id: number | null
          updated_on: string | null
          value: number
          value_range: number | null
          value_type: string
        }
        Insert: {
          added_by_id?: number | null
          ai_description?: string | null
          alias_name?: string | null
          arabic_name?: string | null
          area?: string | null
          area_unit?: string | null
          bnc_project_number?: string | null
          building_permit_number?: string | null
          can_list: boolean
          changeset_id?: number | null
          city_id: number
          citylocation_id?: number | null
          completion_percentage?: number | null
          contract_number?: string | null
          contract_type_id?: number | null
          created: string
          description?: string | null
          development_type_id?: number | null
          estimated_area?: number | null
          estimated_completion_month?: number | null
          estimated_completion_year?: number | null
          hide_completion_percentage?: number | null
          id: number
          latlongstring?: string | null
          linked_bnc_project_id?: number | null
          location?: string | null
          name: string
          new_project_type_id?: number | null
          new_subtype_id?: number | null
          old_syn_id?: number | null
          plot_number?: string | null
          posted_on?: string | null
          profile_type?: string | null
          project_area_id?: number | null
          project_country_id: number
          project_stage_id: number
          project_state_id?: number | null
          reference_number?: string | null
          s3_image_url?: string | null
          sector_id?: number | null
          slug?: string | null
          spent_value: number
          state?: string | null
          status_id?: number | null
          subscribed_company: number
          substage_id?: number | null
          syn_id?: number | null
          tender_number?: string | null
          total_key_contacts?: number | null
          updated: string
          updated_by_id?: number | null
          updated_on?: string | null
          value: number
          value_range?: number | null
          value_type: string
        }
        Update: {
          added_by_id?: number | null
          ai_description?: string | null
          alias_name?: string | null
          arabic_name?: string | null
          area?: string | null
          area_unit?: string | null
          bnc_project_number?: string | null
          building_permit_number?: string | null
          can_list?: boolean
          changeset_id?: number | null
          city_id?: number
          citylocation_id?: number | null
          completion_percentage?: number | null
          contract_number?: string | null
          contract_type_id?: number | null
          created?: string
          description?: string | null
          development_type_id?: number | null
          estimated_area?: number | null
          estimated_completion_month?: number | null
          estimated_completion_year?: number | null
          hide_completion_percentage?: number | null
          id?: number
          latlongstring?: string | null
          linked_bnc_project_id?: number | null
          location?: string | null
          name?: string
          new_project_type_id?: number | null
          new_subtype_id?: number | null
          old_syn_id?: number | null
          plot_number?: string | null
          posted_on?: string | null
          profile_type?: string | null
          project_area_id?: number | null
          project_country_id?: number
          project_stage_id?: number
          project_state_id?: number | null
          reference_number?: string | null
          s3_image_url?: string | null
          sector_id?: number | null
          slug?: string | null
          spent_value?: number
          state?: string | null
          status_id?: number | null
          subscribed_company?: number
          substage_id?: number | null
          syn_id?: number | null
          tender_number?: string | null
          total_key_contacts?: number | null
          updated?: string
          updated_by_id?: number | null
          updated_on?: string | null
          value?: number
          value_range?: number | null
          value_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_project_contract_type"
            columns: ["contract_type_id"]
            isOneToOne: false
            referencedRelation: "projectcontracttype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_country"
            columns: ["project_country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_development_type"
            columns: ["development_type_id"]
            isOneToOne: false
            referencedRelation: "projectdevelopmenttype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_new_project_type"
            columns: ["new_project_type_id"]
            isOneToOne: false
            referencedRelation: "project_newprojecttype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_new_subtype"
            columns: ["new_subtype_id"]
            isOneToOne: false
            referencedRelation: "project_newprojectsubtype"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_sector"
            columns: ["sector_id"]
            isOneToOne: false
            referencedRelation: "project_sector"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_stage"
            columns: ["project_stage_id"]
            isOneToOne: false
            referencedRelation: "project_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_project_substage"
            columns: ["substage_id"]
            isOneToOne: false
            referencedRelation: "project_projectsubstage"
            referencedColumns: ["id"]
          },
        ]
      }
      projectsignposts: {
        Row: {
          description: string | null
          entered_on: string
          id: number
          project_id: number
          sign_post_text: string | null
          signpost_id: number
          subscribed_company: number
          syn_id: number | null
          updated_on: string
        }
        Insert: {
          description?: string | null
          entered_on: string
          id: number
          project_id: number
          sign_post_text?: string | null
          signpost_id: number
          subscribed_company: number
          syn_id?: number | null
          updated_on: string
        }
        Update: {
          description?: string | null
          entered_on?: string
          id?: number
          project_id?: number
          sign_post_text?: string | null
          signpost_id?: number
          subscribed_company?: number
          syn_id?: number | null
          updated_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_projectsignposts_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_projectsignposts_signpost"
            columns: ["signpost_id"]
            isOneToOne: false
            referencedRelation: "project_signpost"
            referencedColumns: ["id"]
          },
        ]
      }
      projecttree: {
        Row: {
          added_on: string | null
          changeset_id: number | null
          childproject_id: number | null
          id: number
          linked_bnc_project_id: number | null
          mainproject_id: number | null
          old_syn_id: number | null
          root_node: number | null
          root_node_air_id: number | null
          subscribed_company: number
          syn_id: number | null
          total_nodes: number | null
        }
        Insert: {
          added_on?: string | null
          changeset_id?: number | null
          childproject_id?: number | null
          id: number
          linked_bnc_project_id?: number | null
          mainproject_id?: number | null
          old_syn_id?: number | null
          root_node?: number | null
          root_node_air_id?: number | null
          subscribed_company: number
          syn_id?: number | null
          total_nodes?: number | null
        }
        Update: {
          added_on?: string | null
          changeset_id?: number | null
          childproject_id?: number | null
          id?: number
          linked_bnc_project_id?: number | null
          mainproject_id?: number | null
          old_syn_id?: number | null
          root_node?: number | null
          root_node_air_id?: number | null
          subscribed_company?: number
          syn_id?: number | null
          total_nodes?: number | null
        }
        Relationships: []
      }
      pu_void_trash_actions: {
        Row: {
          action_type: string
          actioned_at: string | null
          actioned_by: string | null
          additional_notes: string | null
          id: number
          product_id: number | null
          pu_user_id: number
          reason_id: number
        }
        Insert: {
          action_type: string
          actioned_at?: string | null
          actioned_by?: string | null
          additional_notes?: string | null
          id?: number
          product_id?: number | null
          pu_user_id: number
          reason_id: number
        }
        Update: {
          action_type?: string
          actioned_at?: string | null
          actioned_by?: string | null
          additional_notes?: string | null
          id?: number
          product_id?: number | null
          pu_user_id?: number
          reason_id?: number
        }
        Relationships: []
      }
      public_domains: {
        Row: {
          created_at: string | null
          created_by: string | null
          domain: string
          id: number
          status: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          domain: string
          id?: number
          status?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          domain?: string
          id?: number
          status?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_domains_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "public_domains_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "public_domains_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "public_domains_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      pucompanies: {
        Row: {
          city_id: number
          country_id: number
          created: string
          id: number
          name: string
          phone: string | null
          subscribed_company: number
          updated: string
          user_id: number
        }
        Insert: {
          city_id: number
          country_id: number
          created: string
          id: number
          name: string
          phone?: string | null
          subscribed_company: number
          updated: string
          user_id: number
        }
        Update: {
          city_id?: number
          country_id?: number
          created?: string
          id?: number
          name?: string
          phone?: string | null
          subscribed_company?: number
          updated?: string
          user_id?: number
        }
        Relationships: []
      }
      pucontacts: {
        Row: {
          created: string
          designation: string | null
          email: string
          first_name: string
          id: number
          last_name: string | null
          subscribed_company: number
          updated: string
          user_id: number
        }
        Insert: {
          created: string
          designation?: string | null
          email: string
          first_name: string
          id: number
          last_name?: string | null
          subscribed_company: number
          updated: string
          user_id: number
        }
        Update: {
          created?: string
          designation?: string | null
          email?: string
          first_name?: string
          id?: number
          last_name?: string | null
          subscribed_company?: number
          updated?: string
          user_id?: number
        }
        Relationships: []
      }
      puusers: {
        Row: {
          analytic_report_request: boolean
          area_code: string
          bulletin_request: boolean
          campaign_content: string | null
          campaign_medium: string | null
          city: string
          company_id: number | null
          contact_id: number | null
          country_code: string
          created: string
          demo_request: boolean
          email: string
          email_verified: boolean
          extra_params: Json | null
          generic_report_id: number | null
          id: number
          invitation_id: number | null
          journal_request: boolean
          linked_company_id: number | null
          linked_contact_by: string | null
          linked_contact_id: number | null
          linked_contact_on: string | null
          linkedby: string | null
          linkedon: string | null
          mobile: string | null
          name: string
          phone: string
          phone_number: string
          product_id: number | null
          pu_account_created: boolean | null
          purchase_request: boolean
          source_domain: string | null
          source_page: string | null
          source_url: string | null
          status: string | null
          subscribed_company: number
          updated: string
          verified_domain: boolean
        }
        Insert: {
          analytic_report_request: boolean
          area_code: string
          bulletin_request: boolean
          campaign_content?: string | null
          campaign_medium?: string | null
          city: string
          company_id?: number | null
          contact_id?: number | null
          country_code: string
          created: string
          demo_request: boolean
          email: string
          email_verified: boolean
          extra_params?: Json | null
          generic_report_id?: number | null
          id: number
          invitation_id?: number | null
          journal_request: boolean
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile?: string | null
          name: string
          phone: string
          phone_number: string
          product_id?: number | null
          pu_account_created?: boolean | null
          purchase_request: boolean
          source_domain?: string | null
          source_page?: string | null
          source_url?: string | null
          status?: string | null
          subscribed_company: number
          updated: string
          verified_domain: boolean
        }
        Update: {
          analytic_report_request?: boolean
          area_code?: string
          bulletin_request?: boolean
          campaign_content?: string | null
          campaign_medium?: string | null
          city?: string
          company_id?: number | null
          contact_id?: number | null
          country_code?: string
          created?: string
          demo_request?: boolean
          email?: string
          email_verified?: boolean
          extra_params?: Json | null
          generic_report_id?: number | null
          id?: number
          invitation_id?: number | null
          journal_request?: boolean
          linked_company_id?: number | null
          linked_contact_by?: string | null
          linked_contact_id?: number | null
          linked_contact_on?: string | null
          linkedby?: string | null
          linkedon?: string | null
          mobile?: string | null
          name?: string
          phone?: string
          phone_number?: string
          product_id?: number | null
          pu_account_created?: boolean | null
          purchase_request?: boolean
          source_domain?: string | null
          source_page?: string | null
          source_url?: string | null
          status?: string | null
          subscribed_company?: number
          updated?: string
          verified_domain?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "puusers_linked_company_id_fkey"
            columns: ["linked_company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "puusers_linked_contact_by_fkey"
            columns: ["linked_contact_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "puusers_linked_contact_by_fkey"
            columns: ["linked_contact_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "puusers_linked_contact_id_fkey"
            columns: ["linked_contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "puusers_linkedby_fkey"
            columns: ["linkedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "puusers_linkedby_fkey"
            columns: ["linkedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "puusers_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      quickbooks_collection_sync: {
        Row: {
          collection_id: number
          created_by: string | null
          environment: string
          first_synced_at: string | null
          id: number
          last_synced_at: string | null
          quickbooks_payment_id: string
          sync_error: string | null
          sync_status: string | null
          updated_by: string | null
        }
        Insert: {
          collection_id: number
          created_by?: string | null
          environment?: string
          first_synced_at?: string | null
          id?: number
          last_synced_at?: string | null
          quickbooks_payment_id: string
          sync_error?: string | null
          sync_status?: string | null
          updated_by?: string | null
        }
        Update: {
          collection_id?: number
          created_by?: string | null
          environment?: string
          first_synced_at?: string | null
          id?: number
          last_synced_at?: string | null
          quickbooks_payment_id?: string
          sync_error?: string | null
          sync_status?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quickbooks_collection_sync_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "invoice_collections"
            referencedColumns: ["id"]
          },
        ]
      }
      quickbooks_company_sync: {
        Row: {
          company_id: number
          created_by: string | null
          environment: string
          first_synced_at: string | null
          id: number
          last_synced_at: string | null
          quickbooks_customer_id: string
          sync_error: string | null
          sync_status: string | null
          updated_by: string | null
        }
        Insert: {
          company_id: number
          created_by?: string | null
          environment?: string
          first_synced_at?: string | null
          id?: number
          last_synced_at?: string | null
          quickbooks_customer_id: string
          sync_error?: string | null
          sync_status?: string | null
          updated_by?: string | null
        }
        Update: {
          company_id?: number
          created_by?: string | null
          environment?: string
          first_synced_at?: string | null
          id?: number
          last_synced_at?: string | null
          quickbooks_customer_id?: string
          sync_error?: string | null
          sync_status?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quickbooks_company_sync_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      quickbooks_invoice_sync: {
        Row: {
          created_by: string | null
          environment: string
          first_synced_at: string | null
          id: number
          invoice_id: number
          last_synced_at: string | null
          quickbooks_invoice_id: string
          sync_error: string | null
          sync_status: string | null
          updated_by: string | null
        }
        Insert: {
          created_by?: string | null
          environment?: string
          first_synced_at?: string | null
          id?: number
          invoice_id: number
          last_synced_at?: string | null
          quickbooks_invoice_id: string
          sync_error?: string | null
          sync_status?: string | null
          updated_by?: string | null
        }
        Update: {
          created_by?: string | null
          environment?: string
          first_synced_at?: string | null
          id?: number
          invoice_id?: number
          last_synced_at?: string | null
          quickbooks_invoice_id?: string
          sync_error?: string | null
          sync_status?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quickbooks_invoice_sync_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      quickbooks_settings: {
        Row: {
          access_token: string | null
          company_name: string | null
          created_at: string | null
          created_by: string | null
          environment: string | null
          id: number
          is_active: boolean | null
          realm_id: string
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          access_token?: string | null
          company_name?: string | null
          created_at?: string | null
          created_by?: string | null
          environment?: string | null
          id?: number
          is_active?: boolean | null
          realm_id: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          access_token?: string | null
          company_name?: string | null
          created_at?: string | null
          created_by?: string | null
          environment?: string | null
          id?: number
          is_active?: boolean | null
          realm_id?: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      quotation_agent_sessions: {
        Row: {
          browse_mode: boolean
          created_at: string
          current_option_id: number
          flow_state: string
          id: string
          options: Json
          preferences: Json
          thread_id: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          browse_mode?: boolean
          created_at?: string
          current_option_id?: number
          flow_state?: string
          id?: string
          options?: Json
          preferences?: Json
          thread_id: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          browse_mode?: boolean
          created_at?: string
          current_option_id?: number
          flow_state?: string
          id?: string
          options?: Json
          preferences?: Json
          thread_id?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      quotation_analytics_packs: {
        Row: {
          created_at: string
          discount: number | null
          discount_type: string | null
          id: number
          list_price: number | null
          pack_id: number | null
          pack_name: string
          quotation_option_id: number
          sub_total: number | null
          total: number | null
          updated_at: string
          vat_amount: number | null
          vat_percentage: number | null
        }
        Insert: {
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          id?: number
          list_price?: number | null
          pack_id?: number | null
          pack_name: string
          quotation_option_id: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Update: {
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          id?: number
          list_price?: number | null
          pack_id?: number | null
          pack_name?: string
          quotation_option_id?: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_quotation_analytics_packs_option_id"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_ibis_packs: {
        Row: {
          created_at: string
          discount: number | null
          discount_type: string | null
          free_months: number | null
          free_users: number | null
          id: number
          monthly_user_license_fee: number | null
          pack_id: number | null
          pack_name: string
          paid_months: number | null
          paid_users: number | null
          quotation_option_id: number
          sub_total: number | null
          total: number | null
          updated_at: string
          vat_amount: number | null
          vat_percentage: number | null
        }
        Insert: {
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          free_months?: number | null
          free_users?: number | null
          id?: number
          monthly_user_license_fee?: number | null
          pack_id?: number | null
          pack_name: string
          paid_months?: number | null
          paid_users?: number | null
          quotation_option_id: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Update: {
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          free_months?: number | null
          free_users?: number | null
          id?: number
          monthly_user_license_fee?: number | null
          pack_id?: number | null
          pack_name?: string
          paid_months?: number | null
          paid_users?: number | null
          quotation_option_id?: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_quotation_ibis_packs_option_id"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_integration_packs: {
        Row: {
          created_at: string | null
          discount: number | null
          discount_type: string | null
          id: number
          integration_id: number
          list_price: number | null
          pack_name: string
          quotation_option_id: number
          sub_total: number | null
          total: number | null
          updated_at: string | null
          vat_amount: number | null
          vat_percentage: number | null
        }
        Insert: {
          created_at?: string | null
          discount?: number | null
          discount_type?: string | null
          id?: number
          integration_id: number
          list_price?: number | null
          pack_name: string
          quotation_option_id: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string | null
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Update: {
          created_at?: string | null
          discount?: number | null
          discount_type?: string | null
          id?: number
          integration_id?: number
          list_price?: number | null
          pack_name?: string
          quotation_option_id?: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string | null
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quotation_integration_packs_quotation_option_id_fkey"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_lost_history: {
        Row: {
          created_at: string | null
          id: number
          lost_reason_id: number
          lost_sub_reason_id: number | null
          marked_at: string
          marked_by: string
          notes: string | null
          quotation_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          lost_reason_id: number
          lost_sub_reason_id?: number | null
          marked_at?: string
          marked_by: string
          notes?: string | null
          quotation_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          lost_reason_id?: number
          lost_sub_reason_id?: number | null
          marked_at?: string
          marked_by?: string
          notes?: string | null
          quotation_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "quotation_lost_history_lost_reason_id_fkey"
            columns: ["lost_reason_id"]
            isOneToOne: false
            referencedRelation: "quotation_lost_reasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotation_lost_history_lost_sub_reason_id_fkey"
            columns: ["lost_sub_reason_id"]
            isOneToOne: false
            referencedRelation: "quotation_lost_sub_reasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotation_lost_history_marked_by_fkey"
            columns: ["marked_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotation_lost_history_marked_by_fkey"
            columns: ["marked_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotation_lost_history_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_lost_reasons: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: number
          is_active: boolean | null
          name: string
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          name: string
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          name?: string
        }
        Relationships: []
      }
      quotation_lost_sub_reasons: {
        Row: {
          created_at: string | null
          display_order: number | null
          id: number
          is_active: boolean | null
          lost_reason_id: number | null
          name: string
        }
        Insert: {
          created_at?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          lost_reason_id?: number | null
          name: string
        }
        Update: {
          created_at?: string | null
          display_order?: number | null
          id?: number
          is_active?: boolean | null
          lost_reason_id?: number | null
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "quotation_lost_sub_reasons_lost_reason_id_fkey"
            columns: ["lost_reason_id"]
            isOneToOne: false
            referencedRelation: "quotation_lost_reasons"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_options: {
        Row: {
          created_at: string
          discount: number | null
          id: number
          name: string | null
          option_number: number
          quotation_id: number
          sub_total: number | null
          total: number | null
          updated_at: string
          vat_amount: number | null
          vat_percentage: number | null
        }
        Insert: {
          created_at?: string
          discount?: number | null
          id?: number
          name?: string | null
          option_number: number
          quotation_id: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Update: {
          created_at?: string
          discount?: number | null
          id?: number
          name?: string | null
          option_number?: number
          quotation_id?: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_quotation_options_quotation_id"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_options_detail: {
        Row: {
          category: string | null
          country: number | null
          id: number
          optionid: number | null
          quotationid: number | null
          stage: string | null
          valuerange: string | null
        }
        Insert: {
          category?: string | null
          country?: number | null
          id: number
          optionid?: number | null
          quotationid?: number | null
          stage?: string | null
          valuerange?: string | null
        }
        Update: {
          category?: string | null
          country?: number | null
          id?: number
          optionid?: number | null
          quotationid?: number | null
          stage?: string | null
          valuerange?: string | null
        }
        Relationships: []
      }
      quotation_pricing_config: {
        Row: {
          config_key: string
          config_value: Json
          created_at: string | null
          description: string | null
          id: number
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          config_key: string
          config_value: Json
          created_at?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          config_key?: string
          config_value?: Json
          created_at?: string | null
          description?: string | null
          id?: number
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      quotation_rate_limits: {
        Row: {
          created_at: string | null
          id: number
          request_count: number | null
          user_id: string
          window_start: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          request_count?: number | null
          user_id: string
          window_start?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          request_count?: number | null
          user_id?: string
          window_start?: string | null
        }
        Relationships: []
      }
      quotation_research_packs: {
        Row: {
          created_at: string
          discount: number | null
          discount_type: string | null
          id: number
          list_price: number | null
          pack_id: number | null
          pack_name: string
          quotation_option_id: number
          sub_total: number | null
          total: number | null
          updated_at: string
          vat_amount: number | null
          vat_percentage: number | null
        }
        Insert: {
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          id?: number
          list_price?: number | null
          pack_id?: number | null
          pack_name: string
          quotation_option_id: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Update: {
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          id?: number
          list_price?: number | null
          pack_id?: number | null
          pack_name?: string
          quotation_option_id?: number
          sub_total?: number | null
          total?: number | null
          updated_at?: string
          vat_amount?: number | null
          vat_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_quotation_research_packs_option_id"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_status_history: {
        Row: {
          changed_at: string | null
          changed_by: string | null
          id: number
          lost_reasons: string[] | null
          lost_sub_reasons: string[] | null
          new_status: Database["public"]["Enums"]["quotation_status"]
          notes: string | null
          previous_status:
            | Database["public"]["Enums"]["quotation_status"]
            | null
          quotation_id: number | null
        }
        Insert: {
          changed_at?: string | null
          changed_by?: string | null
          id?: number
          lost_reasons?: string[] | null
          lost_sub_reasons?: string[] | null
          new_status: Database["public"]["Enums"]["quotation_status"]
          notes?: string | null
          previous_status?:
            | Database["public"]["Enums"]["quotation_status"]
            | null
          quotation_id?: number | null
        }
        Update: {
          changed_at?: string | null
          changed_by?: string | null
          id?: number
          lost_reasons?: string[] | null
          lost_sub_reasons?: string[] | null
          new_status?: Database["public"]["Enums"]["quotation_status"]
          notes?: string | null
          previous_status?:
            | Database["public"]["Enums"]["quotation_status"]
            | null
          quotation_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quotation_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotation_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotation_status_history_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_templates: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_shared: boolean | null
          name: string
          product_id: number | null
          template_config: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_shared?: boolean | null
          name: string
          product_id?: number | null
          template_config: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_shared?: boolean | null
          name?: string
          product_id?: number | null
          template_config?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quotation_templates_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      quotations: {
        Row: {
          approval_notes: string | null
          approval_status: string | null
          approved_at: string | null
          approved_by: string | null
          auto_generated_source: string | null
          company_id: number
          contact_id: number | null
          created_at: string
          created_by: string
          currency: string
          early_termination_fee: number | null
          exchange_rate: number | null
          id: number
          is_auto_generated: boolean | null
          is_locked: boolean | null
          lost_notes: string | null
          lost_reasons: string[] | null
          lost_sub_reasons: string[] | null
          number_of_payments: number | null
          payment_plan: string
          payment1_percentage: number | null
          payment2_date: string | null
          payment2_percentage: number | null
          payment3_date: string | null
          payment3_percentage: number | null
          pdf_url: string | null
          percentage: number | null
          proposal_validity: string | null
          quotation_date: string
          quotation_type: Database["public"]["Enums"]["quotation_type"]
          reference_number: string | null
          requires_approval: boolean | null
          revised_from_id: number | null
          revision_number: number | null
          sent_at: string | null
          sent_by: string | null
          sent_status: string | null
          status: Database["public"]["Enums"]["quotation_status"]
          status_updated_at: string | null
          status_updated_by: string | null
          submitted_by: string | null
          submitted_for_approval_at: string | null
          syg_quotationid: number | null
          terms_conditions: string | null
          updated_at: string
          updated_by: string | null
          void_notes: string | null
          void_reason: string | null
          voided_at: string | null
          voided_by: string | null
        }
        Insert: {
          approval_notes?: string | null
          approval_status?: string | null
          approved_at?: string | null
          approved_by?: string | null
          auto_generated_source?: string | null
          company_id: number
          contact_id?: number | null
          created_at?: string
          created_by: string
          currency?: string
          early_termination_fee?: number | null
          exchange_rate?: number | null
          id?: number
          is_auto_generated?: boolean | null
          is_locked?: boolean | null
          lost_notes?: string | null
          lost_reasons?: string[] | null
          lost_sub_reasons?: string[] | null
          number_of_payments?: number | null
          payment_plan?: string
          payment1_percentage?: number | null
          payment2_date?: string | null
          payment2_percentage?: number | null
          payment3_date?: string | null
          payment3_percentage?: number | null
          pdf_url?: string | null
          percentage?: number | null
          proposal_validity?: string | null
          quotation_date: string
          quotation_type?: Database["public"]["Enums"]["quotation_type"]
          reference_number?: string | null
          requires_approval?: boolean | null
          revised_from_id?: number | null
          revision_number?: number | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["quotation_status"]
          status_updated_at?: string | null
          status_updated_by?: string | null
          submitted_by?: string | null
          submitted_for_approval_at?: string | null
          syg_quotationid?: number | null
          terms_conditions?: string | null
          updated_at?: string
          updated_by?: string | null
          void_notes?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Update: {
          approval_notes?: string | null
          approval_status?: string | null
          approved_at?: string | null
          approved_by?: string | null
          auto_generated_source?: string | null
          company_id?: number
          contact_id?: number | null
          created_at?: string
          created_by?: string
          currency?: string
          early_termination_fee?: number | null
          exchange_rate?: number | null
          id?: number
          is_auto_generated?: boolean | null
          is_locked?: boolean | null
          lost_notes?: string | null
          lost_reasons?: string[] | null
          lost_sub_reasons?: string[] | null
          number_of_payments?: number | null
          payment_plan?: string
          payment1_percentage?: number | null
          payment2_date?: string | null
          payment2_percentage?: number | null
          payment3_date?: string | null
          payment3_percentage?: number | null
          pdf_url?: string | null
          percentage?: number | null
          proposal_validity?: string | null
          quotation_date?: string
          quotation_type?: Database["public"]["Enums"]["quotation_type"]
          reference_number?: string | null
          requires_approval?: boolean | null
          revised_from_id?: number | null
          revision_number?: number | null
          sent_at?: string | null
          sent_by?: string | null
          sent_status?: string | null
          status?: Database["public"]["Enums"]["quotation_status"]
          status_updated_at?: string | null
          status_updated_by?: string | null
          submitted_by?: string | null
          submitted_for_approval_at?: string | null
          syg_quotationid?: number | null
          terms_conditions?: string | null
          updated_at?: string
          updated_by?: string | null
          void_notes?: string | null
          void_reason?: string | null
          voided_at?: string | null
          voided_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quotations_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotations_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotations_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotations_revised_from_id_fkey"
            columns: ["revised_from_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_status_updated_by_fkey"
            columns: ["status_updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotations_status_updated_by_fkey"
            columns: ["status_updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotations_submitted_by_fkey1"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotations_submitted_by_fkey1"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotations_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "quotations_voided_by_fkey"
            columns: ["voided_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "quotations_voided_by_fkey"
            columns: ["voided_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      receipts: {
        Row: {
          amount: number | null
          collection_id: number
          company_id: number | null
          contact_id: number | null
          created_at: string | null
          created_by: string
          currency: string | null
          id: number
          invoice_id: number | null
          payment_type: string
          receipt_date: string
          receipt_id: string
          receipt_no: string | null
          receipt_ref: string | null
          s3_url: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          collection_id: number
          company_id?: number | null
          contact_id?: number | null
          created_at?: string | null
          created_by: string
          currency?: string | null
          id?: number
          invoice_id?: number | null
          payment_type: string
          receipt_date?: string
          receipt_id: string
          receipt_no?: string | null
          receipt_ref?: string | null
          s3_url?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          collection_id?: number
          company_id?: number | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string
          currency?: string | null
          id?: number
          invoice_id?: number | null
          payment_type?: string
          receipt_date?: string
          receipt_id?: string
          receipt_no?: string | null
          receipt_ref?: string | null
          s3_url?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      recipient_list_exclusions: {
        Row: {
          created_at: string | null
          created_by: string | null
          exclusion_type: string | null
          id: number
          product_id: number
          recipient_list_id: number
          type: string
          value: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          exclusion_type?: string | null
          id?: number
          product_id: number
          recipient_list_id: number
          type: string
          value: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          exclusion_type?: string | null
          id?: number
          product_id?: number
          recipient_list_id?: number
          type?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "recipient_list_exclusions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_list_exclusions_recipient_list_id_fkey"
            columns: ["recipient_list_id"]
            isOneToOne: false
            referencedRelation: "recipient_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      recipient_list_members: {
        Row: {
          company_id: number | null
          company_name: string | null
          contact_id: number
          created_at: string | null
          designation_name: string | null
          final_email: string | null
          first_name: string | null
          generated_at: string | null
          last_name: string | null
          recipient_count: number | null
          recipient_list_id: number
          suppressed: boolean
          suppression_reason: string | null
          updated_at: string | null
        }
        Insert: {
          company_id?: number | null
          company_name?: string | null
          contact_id: number
          created_at?: string | null
          designation_name?: string | null
          final_email?: string | null
          first_name?: string | null
          generated_at?: string | null
          last_name?: string | null
          recipient_count?: number | null
          recipient_list_id: number
          suppressed?: boolean
          suppression_reason?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: number | null
          company_name?: string | null
          contact_id?: number
          created_at?: string | null
          designation_name?: string | null
          final_email?: string | null
          first_name?: string | null
          generated_at?: string | null
          last_name?: string | null
          recipient_count?: number | null
          recipient_list_id?: number
          suppressed?: boolean
          suppression_reason?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipient_list_members_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_list_members_recipient_list_id_fkey"
            columns: ["recipient_list_id"]
            isOneToOne: false
            referencedRelation: "recipient_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      recipient_list_sources: {
        Row: {
          campaign_dataset_id: number | null
          created_at: string
          created_by: string | null
          engagement_segment: string | null
          id: number
          parent_job_id: number | null
          parent_recipient_list_id: number | null
          recipient_list_id: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          campaign_dataset_id?: number | null
          created_at?: string
          created_by?: string | null
          engagement_segment?: string | null
          id?: number
          parent_job_id?: number | null
          parent_recipient_list_id?: number | null
          recipient_list_id: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          campaign_dataset_id?: number | null
          created_at?: string
          created_by?: string | null
          engagement_segment?: string | null
          id?: number
          parent_job_id?: number | null
          parent_recipient_list_id?: number | null
          recipient_list_id?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipient_list_sources_campaign_dataset_id_fkey"
            columns: ["campaign_dataset_id"]
            isOneToOne: false
            referencedRelation: "campaign_datasets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_list_sources_parent_job_id_fkey"
            columns: ["parent_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_list_sources_parent_recipient_list_id_fkey"
            columns: ["parent_recipient_list_id"]
            isOneToOne: false
            referencedRelation: "recipient_lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_list_sources_recipient_list_id_fkey"
            columns: ["recipient_list_id"]
            isOneToOne: false
            referencedRelation: "recipient_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      recipient_lists: {
        Row: {
          campaign_dataset_id: number
          created_at: string | null
          created_by: string | null
          finalized: boolean
          id: number
          name: string
          product_id: number
          subcampaign_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          campaign_dataset_id: number
          created_at?: string | null
          created_by?: string | null
          finalized?: boolean
          id?: never
          name: string
          product_id: number
          subcampaign_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          campaign_dataset_id?: number
          created_at?: string | null
          created_by?: string | null
          finalized?: boolean
          id?: never
          name?: string
          product_id?: number
          subcampaign_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipient_lists_campaign_dataset_id_fkey"
            columns: ["campaign_dataset_id"]
            isOneToOne: false
            referencedRelation: "campaign_datasets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_lists_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipient_lists_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      reminder_activities: {
        Row: {
          action_at: string | null
          action_by: string | null
          action_type: string
          id: number
          notes: string | null
          reminder_id: number
        }
        Insert: {
          action_at?: string | null
          action_by?: string | null
          action_type: string
          id?: number
          notes?: string | null
          reminder_id: number
        }
        Update: {
          action_at?: string | null
          action_by?: string | null
          action_type?: string
          id?: number
          notes?: string | null
          reminder_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "reminder_activities_reminder_id_fkey"
            columns: ["reminder_id"]
            isOneToOne: false
            referencedRelation: "reminders"
            referencedColumns: ["id"]
          },
        ]
      }
      reminders: {
        Row: {
          company_id: number | null
          completed_at: string | null
          completed_by: string | null
          completion_notes: string | null
          contact_id: number | null
          created_at: string
          created_by: string
          description: string
          due_date: string
          id: number
          owner_id: string
          product_id: number | null
          status: string
          updated_at: string
        }
        Insert: {
          company_id?: number | null
          completed_at?: string | null
          completed_by?: string | null
          completion_notes?: string | null
          contact_id?: number | null
          created_at?: string
          created_by?: string
          description: string
          due_date: string
          id?: number
          owner_id: string
          product_id?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          company_id?: number | null
          completed_at?: string | null
          completed_by?: string | null
          completion_notes?: string | null
          contact_id?: number | null
          created_at?: string
          created_by?: string
          description?: string
          due_date?: string
          id?: number
          owner_id?: string
          product_id?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reminders_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminders_completed_by_fkey"
            columns: ["completed_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "reminders_completed_by_fkey"
            columns: ["completed_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reminders_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reminders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "reminders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "reminders_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "reminders_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      renewal_forecast_stg: {
        Row: {
          companycode: number
          renewalforecast: string | null
        }
        Insert: {
          companycode: number
          renewalforecast?: string | null
        }
        Update: {
          companycode?: number
          renewalforecast?: string | null
        }
        Relationships: []
      }
      renewal_quotation_log: {
        Row: {
          created_at: string | null
          created_by: string | null
          error_message: string | null
          generated_quotation_id: number
          id: number
          notification_sent: boolean | null
          notification_sent_at: string | null
          source_quotation_id: number | null
          status: string | null
          subscription_id: number
          target_expiry_date: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          generated_quotation_id: number
          id?: number
          notification_sent?: boolean | null
          notification_sent_at?: string | null
          source_quotation_id?: number | null
          status?: string | null
          subscription_id: number
          target_expiry_date: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          generated_quotation_id?: number
          id?: number
          notification_sent?: boolean | null
          notification_sent_at?: string | null
          source_quotation_id?: number | null
          status?: string | null
          subscription_id?: number
          target_expiry_date?: string
        }
        Relationships: []
      }
      research_pack_price_discount: {
        Row: {
          annual_price: number
          created_by: string | null
          created_on: string
          free_users_count: number
          ibis_pack_id: number | null
          ibis_pack_name: string | null
          id: number
          multi_pack_discount: number
          research_package_id: number | null
          research_package_name: string | null
          standalone_discount: number
          status: string
          subscribed_company: number
          updated_by: string | null
          updated_on: string
        }
        Insert: {
          annual_price?: number
          created_by?: string | null
          created_on?: string
          free_users_count?: number
          ibis_pack_id?: number | null
          ibis_pack_name?: string | null
          id?: number
          multi_pack_discount?: number
          research_package_id?: number | null
          research_package_name?: string | null
          standalone_discount?: number
          status?: string
          subscribed_company?: number
          updated_by?: string | null
          updated_on?: string
        }
        Update: {
          annual_price?: number
          created_by?: string | null
          created_on?: string
          free_users_count?: number
          ibis_pack_id?: number | null
          ibis_pack_name?: string | null
          id?: number
          multi_pack_discount?: number
          research_package_id?: number | null
          research_package_name?: string | null
          standalone_discount?: number
          status?: string
          subscribed_company?: number
          updated_by?: string | null
          updated_on?: string
        }
        Relationships: [
          {
            foreignKeyName: "research_pack_price_discount_ibis_pack_id_fkey"
            columns: ["ibis_pack_id"]
            isOneToOne: false
            referencedRelation: "ibispacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "research_pack_price_discount_research_package_id_fkey"
            columns: ["research_package_id"]
            isOneToOne: false
            referencedRelation: "researchpacks"
            referencedColumns: ["id"]
          },
        ]
      }
      researchpackdetails: {
        Row: {
          categories: number[] | null
          country_id: number
          created: string
          id: number
          research_id: number
          stages: number[] | null
          updated: string
          values_ranges: number[] | null
        }
        Insert: {
          categories?: number[] | null
          country_id: number
          created: string
          id?: number
          research_id: number
          stages?: number[] | null
          updated: string
          values_ranges?: number[] | null
        }
        Update: {
          categories?: number[] | null
          country_id?: number
          created?: string
          id?: number
          research_id?: number
          stages?: number[] | null
          updated?: string
          values_ranges?: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "researchpackdetails_research_id_fkey"
            columns: ["research_id"]
            isOneToOne: false
            referencedRelation: "researchpacks"
            referencedColumns: ["id"]
          },
        ]
      }
      researchpacks: {
        Row: {
          conditions: string | null
          country_pack: boolean
          description: string | null
          id: number
          is_custom: boolean
          name: string
          pack_price: number | null
          s3_image_url: string | null
          sector_pack: boolean
          short_description: string | null
          status: string
          summary: string | null
          why_buy_one: string | null
          why_buy_two: string | null
          zones: number[] | null
        }
        Insert: {
          conditions?: string | null
          country_pack: boolean
          description?: string | null
          id?: number
          is_custom: boolean
          name: string
          pack_price?: number | null
          s3_image_url?: string | null
          sector_pack: boolean
          short_description?: string | null
          status: string
          summary?: string | null
          why_buy_one?: string | null
          why_buy_two?: string | null
          zones?: number[] | null
        }
        Update: {
          conditions?: string | null
          country_pack?: boolean
          description?: string | null
          id?: number
          is_custom?: boolean
          name?: string
          pack_price?: number | null
          s3_image_url?: string | null
          sector_pack?: boolean
          short_description?: string | null
          status?: string
          summary?: string | null
          why_buy_one?: string | null
          why_buy_two?: string | null
          zones?: number[] | null
        }
        Relationships: []
      }
      researchsubscription_logs: {
        Row: {
          change_type: string
          changed_fields: string[] | null
          description: string
          id: number
          meta: Json | null
          new_values: Json | null
          old_values: Json | null
          performed_at: string | null
          performed_by: string | null
          researchsubscription_id: number
          subscription_id: number | null
        }
        Insert: {
          change_type: string
          changed_fields?: string[] | null
          description: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          researchsubscription_id: number
          subscription_id?: number | null
        }
        Update: {
          change_type?: string
          changed_fields?: string[] | null
          description?: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          researchsubscription_id?: number
          subscription_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "researchsubscription_logs_researchsubscription_id_fkey"
            columns: ["researchsubscription_id"]
            isOneToOne: false
            referencedRelation: "researchsubscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "researchsubscription_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      researchsubscriptions: {
        Row: {
          created: string
          created_by: string | null
          end_date: string
          extended_date: string | null
          id: number
          order_id: number | null
          pack_id: number
          start_date: string
          status: string
          subscribed_company: number
          subscription_id: number
          syn_id: number | null
          updated_by: string | null
          updated_on: string | null
        }
        Insert: {
          created: string
          created_by?: string | null
          end_date: string
          extended_date?: string | null
          id: number
          order_id?: number | null
          pack_id: number
          start_date: string
          status: string
          subscribed_company: number
          subscription_id: number
          syn_id?: number | null
          updated_by?: string | null
          updated_on?: string | null
        }
        Update: {
          created?: string
          created_by?: string | null
          end_date?: string
          extended_date?: string | null
          id?: number
          order_id?: number | null
          pack_id?: number
          start_date?: string
          status?: string
          subscribed_company?: number
          subscription_id?: number
          syn_id?: number | null
          updated_by?: string | null
          updated_on?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "researchsubscriptions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "researchsubscriptions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "researchsubscriptions_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "researchpacks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "researchsubscriptions_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "researchsubscriptions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "researchsubscriptions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      response_actions: {
        Row: {
          action_params: Json | null
          action_type: string
          auto_execute: boolean | null
          created_at: string
          email_response_id: number
          executed_at: string | null
          executed_by: string | null
          execution_result: Json | null
          id: number
          priority: number | null
          product_id: number
          requires_approval: boolean | null
          status: string
          updated_at: string
        }
        Insert: {
          action_params?: Json | null
          action_type: string
          auto_execute?: boolean | null
          created_at?: string
          email_response_id: number
          executed_at?: string | null
          executed_by?: string | null
          execution_result?: Json | null
          id?: number
          priority?: number | null
          product_id: number
          requires_approval?: boolean | null
          status?: string
          updated_at?: string
        }
        Update: {
          action_params?: Json | null
          action_type?: string
          auto_execute?: boolean | null
          created_at?: string
          email_response_id?: number
          executed_at?: string | null
          executed_by?: string | null
          execution_result?: Json | null
          id?: number
          priority?: number | null
          product_id?: number
          requires_approval?: boolean | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "response_actions_email_response_id_fkey"
            columns: ["email_response_id"]
            isOneToOne: false
            referencedRelation: "email_responses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_actions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      response_anomaly_alerts: {
        Row: {
          acknowledged_at: string | null
          acknowledged_by: string | null
          alert_type: string
          created_at: string | null
          email_job_id: number | null
          historical_average: number | null
          id: number
          is_acknowledged: boolean | null
          message: string
          metric_value: number
          product_id: number | null
          severity: string
          subcampaign_id: number | null
          threshold_value: number
        }
        Insert: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          alert_type: string
          created_at?: string | null
          email_job_id?: number | null
          historical_average?: number | null
          id?: number
          is_acknowledged?: boolean | null
          message: string
          metric_value: number
          product_id?: number | null
          severity: string
          subcampaign_id?: number | null
          threshold_value: number
        }
        Update: {
          acknowledged_at?: string | null
          acknowledged_by?: string | null
          alert_type?: string
          created_at?: string | null
          email_job_id?: number | null
          historical_average?: number | null
          id?: number
          is_acknowledged?: boolean | null
          message?: string
          metric_value?: number
          product_id?: number | null
          severity?: string
          subcampaign_id?: number | null
          threshold_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "response_anomaly_alerts_email_job_id_fkey"
            columns: ["email_job_id"]
            isOneToOne: false
            referencedRelation: "email_jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_anomaly_alerts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "response_anomaly_alerts_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      rm_reassignment_requests: {
        Row: {
          company_id: number
          created_at: string | null
          id: number
          lost_reason_ids: number[] | null
          lost_subreason_ids: number[] | null
          new_rm_id: string | null
          product_id: number
          request_reason: string | null
          requesting_rm_id: string
          resolution_notes: string | null
          resolved_at: string | null
          resolved_by: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          company_id: number
          created_at?: string | null
          id?: number
          lost_reason_ids?: number[] | null
          lost_subreason_ids?: number[] | null
          new_rm_id?: string | null
          product_id: number
          request_reason?: string | null
          requesting_rm_id: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: number
          created_at?: string | null
          id?: number
          lost_reason_ids?: number[] | null
          lost_subreason_ids?: number[] | null
          new_rm_id?: string | null
          product_id?: number
          request_reason?: string | null
          requesting_rm_id?: string
          resolution_notes?: string | null
          resolved_at?: string | null
          resolved_by?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rm_reassignment_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_new_rm_id_fkey"
            columns: ["new_rm_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_new_rm_id_fkey"
            columns: ["new_rm_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_requesting_rm_id_fkey"
            columns: ["requesting_rm_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_requesting_rm_id_fkey"
            columns: ["requesting_rm_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "rm_reassignment_requests_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      role_permissions: {
        Row: {
          created_at: string | null
          created_by: string | null
          dataset_id: number | null
          id: number
          is_allowed: boolean | null
          module_action_dataset_id: number | null
          product_id: number | null
          role_id: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          dataset_id?: number | null
          id?: number
          is_allowed?: boolean | null
          module_action_dataset_id?: number | null
          product_id?: number | null
          role_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          dataset_id?: number | null
          id?: number
          is_allowed?: boolean | null
          module_action_dataset_id?: number | null
          product_id?: number | null
          role_id?: number | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_dataset_id_fkey"
            columns: ["dataset_id"]
            isOneToOne: false
            referencedRelation: "datasets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_module_action_dataset_id_fkey"
            columns: ["module_action_dataset_id"]
            isOneToOne: false
            referencedRelation: "module_action_datasets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean
          is_system_role: boolean | null
          name: string
          status: string | null
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean
          is_system_role?: boolean | null
          name: string
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean
          is_system_role?: boolean | null
          name?: string
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_search_shares: {
        Row: {
          id: number
          permission_level: string
          saved_search_id: number
          shared_at: string
          shared_by: string
          shared_with_user_id: string
        }
        Insert: {
          id?: number
          permission_level: string
          saved_search_id: number
          shared_at?: string
          shared_by: string
          shared_with_user_id: string
        }
        Update: {
          id?: number
          permission_level?: string
          saved_search_id?: number
          shared_at?: string
          shared_by?: string
          shared_with_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_search_shares_saved_search_id_fkey"
            columns: ["saved_search_id"]
            isOneToOne: false
            referencedRelation: "saved_searches"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_searches: {
        Row: {
          created_at: string
          created_by: string | null
          criteria: Json
          criteria_hash: string | null
          description: string | null
          id: number
          is_favorite: boolean | null
          is_public: boolean
          name: string
          owner_id: string
          product_id: number
          search_type: string
          tags: Json | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          criteria?: Json
          criteria_hash?: string | null
          description?: string | null
          id?: number
          is_favorite?: boolean | null
          is_public?: boolean
          name: string
          owner_id: string
          product_id: number
          search_type: string
          tags?: Json | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          criteria?: Json
          criteria_hash?: string | null
          description?: string | null
          id?: number
          is_favorite?: boolean | null
          is_public?: boolean
          name?: string
          owner_id?: string
          product_id?: number
          search_type?: string
          tags?: Json | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_saved_searches_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      search_history: {
        Row: {
          executed_at: string
          executed_by: string
          execution_time_ms: number | null
          id: number
          results_count: number | null
          saved_search_id: number | null
        }
        Insert: {
          executed_at?: string
          executed_by: string
          execution_time_ms?: number | null
          id?: number
          results_count?: number | null
          saved_search_id?: number | null
        }
        Update: {
          executed_at?: string
          executed_by?: string
          execution_time_ms?: number | null
          id?: number
          results_count?: number | null
          saved_search_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "search_history_saved_search_id_fkey"
            columns: ["saved_search_id"]
            isOneToOne: false
            referencedRelation: "saved_searches"
            referencedColumns: ["id"]
          },
        ]
      }
      sender_profiles: {
        Row: {
          created_at: string | null
          created_by: string | null
          from_email: string
          from_name: string
          id: number
          name: string
          product_id: number
          reply_to: string | null
          ses_config_key: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          from_email: string
          from_name: string
          id?: never
          name: string
          product_id: number
          reply_to?: string | null
          ses_config_key: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          from_email?: string
          from_name?: string
          id?: never
          name?: string
          product_id?: number
          reply_to?: string | null
          ses_config_key?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sender_profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "sender_profiles_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "sender_profiles_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sender_profiles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "sender_profiles_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      sfs: {
        Row: {
          created_at: string | null
          id: number
          product_id: number
          sfs: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_id: number
          sfs: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          product_id?: number
          sfs?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_sfs_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      sfs_reasons: {
        Row: {
          created_at: string | null
          id: number
          reason: string
          sfsid: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          reason: string
          sfsid: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          reason?: string
          sfsid?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sfs_reasons_sfsid_fkey"
            columns: ["sfsid"]
            isOneToOne: false
            referencedRelation: "sfs"
            referencedColumns: ["id"]
          },
        ]
      }
      source_frp: {
        Row: {
          area_level_1: string | null
          assigned_by_id: number | null
          assigned_on: string | null
          city_id: number | null
          closed_by_id: number | null
          closed_on: string | null
          contract_number: string | null
          country_id: number | null
          date_taken: string | null
          dm_country: string | null
          dm_ocr_email_domain: string | null
          entered_by: number | null
          entered_on: string | null
          err_msg: string | null
          exact_matched_project_ids: string | null
          gps_coordinate: string | null
          group_id: number | null
          handler_id: number | null
          id: number
          identified_companies_str: string | null
          identified_company_codes: string | null
          image_group_id: number | null
          image_type: string | null
          image_url: string | null
          is_arabic: number | null
          latitude: string | null
          link_status: string | null
          linked_date: string | null
          longitude: string | null
          media_name: string | null
          media_type: string | null
          notes: string | null
          ocr_json: Json | null
          ocr_text: string | null
          old_syn_id: number | null
          other_matched_project_ids: string | null
          permit_number: string | null
          plot_no: string | null
          project_city: string | null
          project_country: string | null
          project_value: string | null
          radius_iterated_up_to: number | null
          recommended_project_id: number | null
          recommended_project_ids: string | null
          source_info_id: number | null
          status_id: number | null
          subscribed_company: number
          tender_number: string | null
          trash_reason_id: number | null
          trashed_by_id: number | null
          trashed_on: string | null
        }
        Insert: {
          area_level_1?: string | null
          assigned_by_id?: number | null
          assigned_on?: string | null
          city_id?: number | null
          closed_by_id?: number | null
          closed_on?: string | null
          contract_number?: string | null
          country_id?: number | null
          date_taken?: string | null
          dm_country?: string | null
          dm_ocr_email_domain?: string | null
          entered_by?: number | null
          entered_on?: string | null
          err_msg?: string | null
          exact_matched_project_ids?: string | null
          gps_coordinate?: string | null
          group_id?: number | null
          handler_id?: number | null
          id: number
          identified_companies_str?: string | null
          identified_company_codes?: string | null
          image_group_id?: number | null
          image_type?: string | null
          image_url?: string | null
          is_arabic?: number | null
          latitude?: string | null
          link_status?: string | null
          linked_date?: string | null
          longitude?: string | null
          media_name?: string | null
          media_type?: string | null
          notes?: string | null
          ocr_json?: Json | null
          ocr_text?: string | null
          old_syn_id?: number | null
          other_matched_project_ids?: string | null
          permit_number?: string | null
          plot_no?: string | null
          project_city?: string | null
          project_country?: string | null
          project_value?: string | null
          radius_iterated_up_to?: number | null
          recommended_project_id?: number | null
          recommended_project_ids?: string | null
          source_info_id?: number | null
          status_id?: number | null
          subscribed_company: number
          tender_number?: string | null
          trash_reason_id?: number | null
          trashed_by_id?: number | null
          trashed_on?: string | null
        }
        Update: {
          area_level_1?: string | null
          assigned_by_id?: number | null
          assigned_on?: string | null
          city_id?: number | null
          closed_by_id?: number | null
          closed_on?: string | null
          contract_number?: string | null
          country_id?: number | null
          date_taken?: string | null
          dm_country?: string | null
          dm_ocr_email_domain?: string | null
          entered_by?: number | null
          entered_on?: string | null
          err_msg?: string | null
          exact_matched_project_ids?: string | null
          gps_coordinate?: string | null
          group_id?: number | null
          handler_id?: number | null
          id?: number
          identified_companies_str?: string | null
          identified_company_codes?: string | null
          image_group_id?: number | null
          image_type?: string | null
          image_url?: string | null
          is_arabic?: number | null
          latitude?: string | null
          link_status?: string | null
          linked_date?: string | null
          longitude?: string | null
          media_name?: string | null
          media_type?: string | null
          notes?: string | null
          ocr_json?: Json | null
          ocr_text?: string | null
          old_syn_id?: number | null
          other_matched_project_ids?: string | null
          permit_number?: string | null
          plot_no?: string | null
          project_city?: string | null
          project_country?: string | null
          project_value?: string | null
          radius_iterated_up_to?: number | null
          recommended_project_id?: number | null
          recommended_project_ids?: string | null
          source_info_id?: number | null
          status_id?: number | null
          subscribed_company?: number
          tender_number?: string | null
          trash_reason_id?: number | null
          trashed_by_id?: number | null
          trashed_on?: string | null
        }
        Relationships: []
      }
      source_mrp: {
        Row: {
          ai_status: string | null
          article_country: string | null
          article_language: string | null
          article_published_date: string | null
          article_title: string | null
          article_url: string | null
          assigned_by_id: number | null
          assigned_on: string | null
          building_permit_number: string | null
          city_id: number | null
          closed_by_id: number | null
          closed_on: string | null
          country_id: number | null
          entered_on: string | null
          estimated_completion: string | null
          estimated_starting: string | null
          group_id: number | null
          grouped_on: string | null
          handler_id: number | null
          id: number
          labels: string | null
          notes: string | null
          old_syn_id: number | null
          plot_area: string | null
          plot_no: string | null
          processed_on: string | null
          project_announce_date: string | null
          project_city: string | null
          project_contract_number: string | null
          project_country: string | null
          project_description: string | null
          project_location: string | null
          project_name: string | null
          project_ownership: string | null
          project_ownership_count: number | null
          project_scheduled_date: string | null
          project_sector: string | null
          project_stage: string | null
          project_subtype: string | null
          project_type: string | null
          project_value: string | null
          sector_id: number | null
          stage_id: number | null
          status_id: number | null
          stream_id: string | null
          stream_title: string | null
          stream_url: string | null
          subscribed_company: number
          subtype_id: number | null
          tender_number: string | null
          trash_reason_id: number | null
          trashed_by_id: number | null
          trashed_on: string | null
          type_id: number | null
          type_info: string | null
          updated_by_id: number | null
          updated_on: string | null
        }
        Insert: {
          ai_status?: string | null
          article_country?: string | null
          article_language?: string | null
          article_published_date?: string | null
          article_title?: string | null
          article_url?: string | null
          assigned_by_id?: number | null
          assigned_on?: string | null
          building_permit_number?: string | null
          city_id?: number | null
          closed_by_id?: number | null
          closed_on?: string | null
          country_id?: number | null
          entered_on?: string | null
          estimated_completion?: string | null
          estimated_starting?: string | null
          group_id?: number | null
          grouped_on?: string | null
          handler_id?: number | null
          id: number
          labels?: string | null
          notes?: string | null
          old_syn_id?: number | null
          plot_area?: string | null
          plot_no?: string | null
          processed_on?: string | null
          project_announce_date?: string | null
          project_city?: string | null
          project_contract_number?: string | null
          project_country?: string | null
          project_description?: string | null
          project_location?: string | null
          project_name?: string | null
          project_ownership?: string | null
          project_ownership_count?: number | null
          project_scheduled_date?: string | null
          project_sector?: string | null
          project_stage?: string | null
          project_subtype?: string | null
          project_type?: string | null
          project_value?: string | null
          sector_id?: number | null
          stage_id?: number | null
          status_id?: number | null
          stream_id?: string | null
          stream_title?: string | null
          stream_url?: string | null
          subscribed_company: number
          subtype_id?: number | null
          tender_number?: string | null
          trash_reason_id?: number | null
          trashed_by_id?: number | null
          trashed_on?: string | null
          type_id?: number | null
          type_info?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
        }
        Update: {
          ai_status?: string | null
          article_country?: string | null
          article_language?: string | null
          article_published_date?: string | null
          article_title?: string | null
          article_url?: string | null
          assigned_by_id?: number | null
          assigned_on?: string | null
          building_permit_number?: string | null
          city_id?: number | null
          closed_by_id?: number | null
          closed_on?: string | null
          country_id?: number | null
          entered_on?: string | null
          estimated_completion?: string | null
          estimated_starting?: string | null
          group_id?: number | null
          grouped_on?: string | null
          handler_id?: number | null
          id?: number
          labels?: string | null
          notes?: string | null
          old_syn_id?: number | null
          plot_area?: string | null
          plot_no?: string | null
          processed_on?: string | null
          project_announce_date?: string | null
          project_city?: string | null
          project_contract_number?: string | null
          project_country?: string | null
          project_description?: string | null
          project_location?: string | null
          project_name?: string | null
          project_ownership?: string | null
          project_ownership_count?: number | null
          project_scheduled_date?: string | null
          project_sector?: string | null
          project_stage?: string | null
          project_subtype?: string | null
          project_type?: string | null
          project_value?: string | null
          sector_id?: number | null
          stage_id?: number | null
          status_id?: number | null
          stream_id?: string | null
          stream_title?: string | null
          stream_url?: string | null
          subscribed_company?: number
          subtype_id?: number | null
          tender_number?: string | null
          trash_reason_id?: number | null
          trashed_by_id?: number | null
          trashed_on?: string | null
          type_id?: number | null
          type_info?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
        }
        Relationships: []
      }
      states: {
        Row: {
          country_id: number | null
          id: number
          state: string
        }
        Insert: {
          country_id?: number | null
          id?: number
          state: string
        }
        Update: {
          country_id?: number | null
          id?: number
          state?: string
        }
        Relationships: [
          {
            foreignKeyName: "states_country_id_fkey"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      subcampaigns: {
        Row: {
          blaze_campaign_id: string | null
          blaze_last_sync_at: string | null
          blaze_metadata: Json | null
          blaze_post_ids: Json | null
          blaze_sync_status: string | null
          campaign_id: number
          channel: string
          code: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string
          id: number
          name: string
          product_id: number
          start_date: string
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          blaze_campaign_id?: string | null
          blaze_last_sync_at?: string | null
          blaze_metadata?: Json | null
          blaze_post_ids?: Json | null
          blaze_sync_status?: string | null
          campaign_id: number
          channel: string
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date: string
          id?: never
          name: string
          product_id: number
          start_date: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          blaze_campaign_id?: string | null
          blaze_last_sync_at?: string | null
          blaze_metadata?: Json | null
          blaze_post_ids?: Json | null
          blaze_sync_status?: string | null
          campaign_id?: number
          channel?: string
          code?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string
          id?: never
          name?: string
          product_id?: number
          start_date?: string
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subcampaigns_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcampaigns_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns_enriched"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcampaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "subcampaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "subcampaigns_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subcampaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "subcampaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      subscription_expiry_log: {
        Row: {
          company_id: number
          error_message: string | null
          expiry_date: string
          expiry_type: string
          id: number
          new_subscription_id: number | null
          notification_sent: boolean | null
          packs_expired: Json | null
          processed_at: string
          subscription_id: number
          transition_type: string | null
          users_downgraded: number | null
        }
        Insert: {
          company_id: number
          error_message?: string | null
          expiry_date: string
          expiry_type: string
          id?: number
          new_subscription_id?: number | null
          notification_sent?: boolean | null
          packs_expired?: Json | null
          processed_at?: string
          subscription_id: number
          transition_type?: string | null
          users_downgraded?: number | null
        }
        Update: {
          company_id?: number
          error_message?: string | null
          expiry_date?: string
          expiry_type?: string
          id?: number
          new_subscription_id?: number | null
          notification_sent?: boolean | null
          packs_expired?: Json | null
          processed_at?: string
          subscription_id?: number
          transition_type?: string | null
          users_downgraded?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscription_expiry_log_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_expiry_warnings: {
        Row: {
          created_at: string | null
          handler_id: string | null
          id: number
          recipient_email: string | null
          sent_at: string | null
          subscription_id: number
          warning_type: string
        }
        Insert: {
          created_at?: string | null
          handler_id?: string | null
          id?: number
          recipient_email?: string | null
          sent_at?: string | null
          subscription_id: number
          warning_type: string
        }
        Update: {
          created_at?: string | null
          handler_id?: string | null
          id?: number
          recipient_email?: string | null
          sent_at?: string | null
          subscription_id?: number
          warning_type?: string
        }
        Relationships: []
      }
      subscription_logs: {
        Row: {
          change_type: string
          changed_fields: string[] | null
          description: string
          id: number
          meta: Json | null
          new_values: Json | null
          old_values: Json | null
          performed_at: string | null
          performed_by: string | null
          subscription_id: number
        }
        Insert: {
          change_type: string
          changed_fields?: string[] | null
          description: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id: number
        }
        Update: {
          change_type?: string
          changed_fields?: string[] | null
          description?: string
          id?: number
          meta?: Json | null
          new_values?: Json | null
          old_values?: Json | null
          performed_at?: string | null
          performed_by?: string | null
          subscription_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscription_logs_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          auto_renewal: boolean | null
          company_id: number | null
          created: string | null
          created_by_id: number | null
          end_date: string
          extended_date: string | null
          id: number
          inv_no: number | null
          notes: string | null
          paiduser_cnt: number | null
          planttree_certificate_url: string | null
          previous_subscription_id: number | null
          renewal_status: string | null
          start_date: string
          status: string
          subscription_type: string | null
          updated: string | null
          updated_by_id: number | null
          updated_on: string | null
          user_count: number
        }
        Insert: {
          auto_renewal?: boolean | null
          company_id?: number | null
          created?: string | null
          created_by_id?: number | null
          end_date: string
          extended_date?: string | null
          id: number
          inv_no?: number | null
          notes?: string | null
          paiduser_cnt?: number | null
          planttree_certificate_url?: string | null
          previous_subscription_id?: number | null
          renewal_status?: string | null
          start_date: string
          status: string
          subscription_type?: string | null
          updated?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
          user_count: number
        }
        Update: {
          auto_renewal?: boolean | null
          company_id?: number | null
          created?: string | null
          created_by_id?: number | null
          end_date?: string
          extended_date?: string | null
          id?: number
          inv_no?: number | null
          notes?: string | null
          paiduser_cnt?: number | null
          planttree_certificate_url?: string | null
          previous_subscription_id?: number | null
          renewal_status?: string | null
          start_date?: string
          status?: string
          subscription_type?: string | null
          updated?: string | null
          updated_by_id?: number | null
          updated_on?: string | null
          user_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      suppression_lists: {
        Row: {
          categories: string[] | null
          created_at: string | null
          email: string
          id: number
          kind: string
          product_id: number | null
          reason: string | null
          scope: string
          updated_at: string | null
        }
        Insert: {
          categories?: string[] | null
          created_at?: string | null
          email: string
          id?: never
          kind: string
          product_id?: number | null
          reason?: string | null
          scope: string
          updated_at?: string | null
        }
        Update: {
          categories?: string[] | null
          created_at?: string | null
          email?: string
          id?: never
          kind?: string
          product_id?: number | null
          reason?: string | null
          scope?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "suppression_lists_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_answers: {
        Row: {
          answer_text: string | null
          answer_value: Json | null
          created_at: string
          id: number
          question_id: number
          submission_id: number
        }
        Insert: {
          answer_text?: string | null
          answer_value?: Json | null
          created_at?: string
          id?: number
          question_id: number
          submission_id: number
        }
        Update: {
          answer_text?: string | null
          answer_value?: Json | null
          created_at?: string
          id?: number
          question_id?: number
          submission_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "survey_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "survey_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_answers_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "survey_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_questions: {
        Row: {
          conditional_on_answer: string | null
          conditional_on_question_id: number | null
          created_at: string
          id: number
          is_required: boolean
          options: Json | null
          question_text: string
          question_type: string
          response_messages: Json | null
          sort_order: number
          survey_id: number
        }
        Insert: {
          conditional_on_answer?: string | null
          conditional_on_question_id?: number | null
          created_at?: string
          id?: number
          is_required?: boolean
          options?: Json | null
          question_text: string
          question_type?: string
          response_messages?: Json | null
          sort_order?: number
          survey_id: number
        }
        Update: {
          conditional_on_answer?: string | null
          conditional_on_question_id?: number | null
          created_at?: string
          id?: number
          is_required?: boolean
          options?: Json | null
          question_text?: string
          question_type?: string
          response_messages?: Json | null
          sort_order?: number
          survey_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "survey_questions_conditional_on_question_id_fkey"
            columns: ["conditional_on_question_id"]
            isOneToOne: false
            referencedRelation: "survey_questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_questions_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_submissions: {
        Row: {
          contact_id: number | null
          created_at: string
          id: number
          status: string
          submitted_at: string | null
          survey_id: number
          token: string
        }
        Insert: {
          contact_id?: number | null
          created_at?: string
          id?: number
          status?: string
          submitted_at?: string | null
          survey_id: number
          token?: string
        }
        Update: {
          contact_id?: number | null
          created_at?: string
          id?: number
          status?: string
          submitted_at?: string | null
          survey_id?: number
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "survey_submissions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_submissions_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      surveys: {
        Row: {
          campaign_id: number | null
          created_at: string
          created_by: string | null
          description: string | null
          event_id: number | null
          id: number
          product_id: number
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          campaign_id?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          event_id?: number | null
          id?: number
          product_id: number
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          campaign_id?: number | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          event_id?: number | null
          id?: number
          product_id?: number
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "surveys_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      syg_employee_stg: {
        Row: {
          "2fa_completed_on": string | null
          associated_users: string | null
          birthdate: string | null
          CompanyID: number | null
          deptcode: string | null
          deptgroup: string | null
          desigcode: number | null
          direct_phone_number: string | null
          email_address: string | null
          employee_code: number
          employee_profile: string | null
          employment_status: string | null
          enteredby: number | null
          enteredon: string | null
          ess_id: number | null
          extension_number: string | null
          first_name: string | null
          gender: string | null
          hire_date: string | null
          is_department_head: boolean | null
          is_first_login: number | null
          last_name: string | null
          login_flag: number | null
          marital_status: string | null
          mobile_number: string | null
          nationality_code: number | null
          office_location: string | null
          Password: string | null
          pending_upload: boolean | null
          qa_approver_id: number | null
          rad_process_id: number | null
          reporting_manager: number | null
          service_end_date: string | null
          super_secret_key: string | null
          surname: string | null
          updatedby: number | null
          updatedon: string | null
          user_rights: string | null
          username: string | null
          workspaceno: number | null
        }
        Insert: {
          "2fa_completed_on"?: string | null
          associated_users?: string | null
          birthdate?: string | null
          CompanyID?: number | null
          deptcode?: string | null
          deptgroup?: string | null
          desigcode?: number | null
          direct_phone_number?: string | null
          email_address?: string | null
          employee_code: number
          employee_profile?: string | null
          employment_status?: string | null
          enteredby?: number | null
          enteredon?: string | null
          ess_id?: number | null
          extension_number?: string | null
          first_name?: string | null
          gender?: string | null
          hire_date?: string | null
          is_department_head?: boolean | null
          is_first_login?: number | null
          last_name?: string | null
          login_flag?: number | null
          marital_status?: string | null
          mobile_number?: string | null
          nationality_code?: number | null
          office_location?: string | null
          Password?: string | null
          pending_upload?: boolean | null
          qa_approver_id?: number | null
          rad_process_id?: number | null
          reporting_manager?: number | null
          service_end_date?: string | null
          super_secret_key?: string | null
          surname?: string | null
          updatedby?: number | null
          updatedon?: string | null
          user_rights?: string | null
          username?: string | null
          workspaceno?: number | null
        }
        Update: {
          "2fa_completed_on"?: string | null
          associated_users?: string | null
          birthdate?: string | null
          CompanyID?: number | null
          deptcode?: string | null
          deptgroup?: string | null
          desigcode?: number | null
          direct_phone_number?: string | null
          email_address?: string | null
          employee_code?: number
          employee_profile?: string | null
          employment_status?: string | null
          enteredby?: number | null
          enteredon?: string | null
          ess_id?: number | null
          extension_number?: string | null
          first_name?: string | null
          gender?: string | null
          hire_date?: string | null
          is_department_head?: boolean | null
          is_first_login?: number | null
          last_name?: string | null
          login_flag?: number | null
          marital_status?: string | null
          mobile_number?: string | null
          nationality_code?: number | null
          office_location?: string | null
          Password?: string | null
          pending_upload?: boolean | null
          qa_approver_id?: number | null
          rad_process_id?: number | null
          reporting_manager?: number | null
          service_end_date?: string | null
          super_secret_key?: string | null
          surname?: string | null
          updatedby?: number | null
          updatedon?: string | null
          user_rights?: string | null
          username?: string | null
          workspaceno?: number | null
        }
        Relationships: []
      }
      syg_subscription_invoice_linking: {
        Row: {
          InvNo: number | null
          Trid: number
        }
        Insert: {
          InvNo?: number | null
          Trid: number
        }
        Update: {
          InvNo?: number | null
          Trid?: number
        }
        Relationships: []
      }
      sync_logs: {
        Row: {
          completed_at: string | null
          direction: string
          error_message: string | null
          events_created: number | null
          events_deleted: number | null
          events_processed: number | null
          events_updated: number | null
          id: number
          integration_id: number
          metadata: Json | null
          started_at: string
          status: string
          sync_type: string
          updated_at: string | null
        }
        Insert: {
          completed_at?: string | null
          direction: string
          error_message?: string | null
          events_created?: number | null
          events_deleted?: number | null
          events_processed?: number | null
          events_updated?: number | null
          id?: never
          integration_id: number
          metadata?: Json | null
          started_at?: string
          status: string
          sync_type: string
          updated_at?: string | null
        }
        Update: {
          completed_at?: string | null
          direction?: string
          error_message?: string | null
          events_created?: number | null
          events_deleted?: number | null
          events_processed?: number | null
          events_updated?: number | null
          id?: never
          integration_id?: number
          metadata?: Json | null
          started_at?: string
          status?: string
          sync_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sync_logs_integration_id_fkey"
            columns: ["integration_id"]
            isOneToOne: false
            referencedRelation: "calendar_integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      synergyhandlers: {
        Row: {
          accountmanageraddedon: string | null
          accountmanagerid: number | null
          companyid: number
          old_syn_id: number | null
          prime_company_id: number | null
          salesmanagerid: number | null
          salesmangeraddedon: string | null
          teamleadaddedon: string | null
          teamleadid: number | null
        }
        Insert: {
          accountmanageraddedon?: string | null
          accountmanagerid?: number | null
          companyid: number
          old_syn_id?: number | null
          prime_company_id?: number | null
          salesmanagerid?: number | null
          salesmangeraddedon?: string | null
          teamleadaddedon?: string | null
          teamleadid?: number | null
        }
        Update: {
          accountmanageraddedon?: string | null
          accountmanagerid?: number | null
          companyid?: number
          old_syn_id?: number | null
          prime_company_id?: number | null
          salesmanagerid?: number | null
          salesmangeraddedon?: string | null
          teamleadaddedon?: string | null
          teamleadid?: number | null
        }
        Relationships: []
      }
      system_email_templates: {
        Row: {
          available_variables: Json | null
          created_at: string | null
          default_bcc: string | null
          default_cc: string | null
          description: string | null
          html_body: string
          id: number
          is_active: boolean | null
          subject: string
          template_code: string
          template_name: string
          text_body: string | null
          updated_at: string | null
        }
        Insert: {
          available_variables?: Json | null
          created_at?: string | null
          default_bcc?: string | null
          default_cc?: string | null
          description?: string | null
          html_body: string
          id?: number
          is_active?: boolean | null
          subject: string
          template_code: string
          template_name: string
          text_body?: string | null
          updated_at?: string | null
        }
        Update: {
          available_variables?: Json | null
          created_at?: string | null
          default_bcc?: string | null
          default_cc?: string | null
          description?: string | null
          html_body?: string
          id?: number
          is_active?: boolean | null
          subject?: string
          template_code?: string
          template_name?: string
          text_body?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      system_feature_events: {
        Row: {
          created_at: string
          event_type: string
          feature_name: string
          id: number
          metadata: Json | null
          module_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          event_type?: string
          feature_name: string
          id?: never
          metadata?: Json | null
          module_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          event_type?: string
          feature_name?: string
          id?: never
          metadata?: Json | null
          module_name?: string
          user_id?: string
        }
        Relationships: []
      }
      system_page_views: {
        Row: {
          created_at: string
          duration_ms: number | null
          id: number
          page_path: string
          page_title: string | null
          referrer_path: string | null
          session_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_ms?: number | null
          id?: never
          page_path: string
          page_title?: string | null
          referrer_path?: string | null
          session_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          duration_ms?: number | null
          id?: never
          page_path?: string
          page_title?: string | null
          referrer_path?: string | null
          session_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      system_user_sessions: {
        Row: {
          id: string
          ip_address: string | null
          is_active: boolean
          last_active_at: string
          pages_visited: number
          started_at: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          id?: string
          ip_address?: string | null
          is_active?: boolean
          last_active_at?: string
          pages_visited?: number
          started_at?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          id?: string
          ip_address?: string | null
          is_active?: boolean
          last_active_at?: string
          pages_visited?: number
          started_at?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      tag_companyassignedtag: {
        Row: {
          added_by_id: number | null
          added_on: string
          company_id: number | null
          id: number
          subscribed_company: number
          tag_id: number | null
        }
        Insert: {
          added_by_id?: number | null
          added_on: string
          company_id?: number | null
          id?: number
          subscribed_company: number
          tag_id?: number | null
        }
        Update: {
          added_by_id?: number | null
          added_on?: string
          company_id?: number | null
          id?: number
          subscribed_company?: number
          tag_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tag_companyassignedtag_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tag_companyassignedtag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag_tagmaster"
            referencedColumns: ["id"]
          },
        ]
      }
      tag_contactassignedtag: {
        Row: {
          added_by_id: number | null
          added_on: string
          contact_id: number | null
          id: number
          subscribed_company: number
          tag_id: number | null
        }
        Insert: {
          added_by_id?: number | null
          added_on: string
          contact_id?: number | null
          id?: number
          subscribed_company: number
          tag_id?: number | null
        }
        Update: {
          added_by_id?: number | null
          added_on?: string
          contact_id?: number | null
          id?: number
          subscribed_company?: number
          tag_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tag_contactassignedtag_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tag_contactassignedtag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag_tagmaster"
            referencedColumns: ["id"]
          },
        ]
      }
      tag_departmenttag: {
        Row: {
          added_by_id: number | null
          added_on: string
          department_id: number | null
          id: number
          subscribed_company: number
          tag_id: number | null
        }
        Insert: {
          added_by_id?: number | null
          added_on?: string
          department_id?: number | null
          id?: number
          subscribed_company: number
          tag_id?: number | null
        }
        Update: {
          added_by_id?: number | null
          added_on?: string
          department_id?: number | null
          id?: number
          subscribed_company?: number
          tag_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tag_departmenttag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag_tagmaster"
            referencedColumns: ["id"]
          },
        ]
      }
      tag_logs: {
        Row: {
          assignment_id: number | null
          change_type: string
          company_id: number | null
          contact_id: number | null
          description: string | null
          entity_type: string
          id: number
          meta: Json | null
          performed_at: string
          performed_by: string | null
          subscribed_company: number
          tag_id: number | null
        }
        Insert: {
          assignment_id?: number | null
          change_type: string
          company_id?: number | null
          contact_id?: number | null
          description?: string | null
          entity_type: string
          id?: number
          meta?: Json | null
          performed_at?: string
          performed_by?: string | null
          subscribed_company: number
          tag_id?: number | null
        }
        Update: {
          assignment_id?: number | null
          change_type?: string
          company_id?: number | null
          contact_id?: number | null
          description?: string | null
          entity_type?: string
          id?: number
          meta?: Json | null
          performed_at?: string
          performed_by?: string | null
          subscribed_company?: number
          tag_id?: number | null
        }
        Relationships: []
      }
      tag_taggroup: {
        Row: {
          added_by_id: number | null
          added_on: string
          description: string | null
          id: number
          is_active: boolean
          name: string
          subscribed_company: number
          updated_by_id: number | null
          updated_on: string
        }
        Insert: {
          added_by_id?: number | null
          added_on: string
          description?: string | null
          id: number
          is_active: boolean
          name: string
          subscribed_company: number
          updated_by_id?: number | null
          updated_on: string
        }
        Update: {
          added_by_id?: number | null
          added_on?: string
          description?: string | null
          id?: number
          is_active?: boolean
          name?: string
          subscribed_company?: number
          updated_by_id?: number | null
          updated_on?: string
        }
        Relationships: []
      }
      tag_tagmaster: {
        Row: {
          added_by_id: number | null
          added_on: string
          color: string | null
          company_id: number | null
          group_id: number | null
          id: number
          is_active: boolean
          name: string
          subscribed_company: number
          syn_id: number | null
          tag_scope: string
          tag_type: string
          updated_by_id: number | null
          updated_on: string
          user_id: number | null
        }
        Insert: {
          added_by_id?: number | null
          added_on: string
          color?: string | null
          company_id?: number | null
          group_id?: number | null
          id: number
          is_active: boolean
          name: string
          subscribed_company: number
          syn_id?: number | null
          tag_scope: string
          tag_type: string
          updated_by_id?: number | null
          updated_on: string
          user_id?: number | null
        }
        Update: {
          added_by_id?: number | null
          added_on?: string
          color?: string | null
          company_id?: number | null
          group_id?: number | null
          id?: number
          is_active?: boolean
          name?: string
          subscribed_company?: number
          syn_id?: number | null
          tag_scope?: string
          tag_type?: string
          updated_by_id?: number | null
          updated_on?: string
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tag_tagmaster_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "tag_taggroup"
            referencedColumns: ["id"]
          },
        ]
      }
      task_interactions: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          interaction_date: string | null
          interaction_html: string | null
          interaction_id: number
          interaction_text: string | null
          interaction_type_id: number | null
          task_id: number
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          interaction_date?: string | null
          interaction_html?: string | null
          interaction_id: number
          interaction_text?: string | null
          interaction_type_id?: number | null
          task_id: number
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          interaction_date?: string | null
          interaction_html?: string | null
          interaction_id?: number
          interaction_text?: string | null
          interaction_type_id?: number | null
          task_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_task_interactions_interaction_type"
            columns: ["interaction_type_id"]
            isOneToOne: false
            referencedRelation: "interaction_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_task_interactions_task"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasklist"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "fk_task_interactions_task"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "tasklist_enriched"
            referencedColumns: ["tasklistid"]
          },
        ]
      }
      tasklist: {
        Row: {
          approval_by: string | null
          approval_notes: string | null
          approval_status: string | null
          approved_at: string | null
          calendar_event_id: number | null
          closedby: string | null
          closedon: string | null
          companyid: number | null
          contactid: number | null
          description: string | null
          enteredby: string
          enteredon: string | null
          interactiontrid: number | null
          leadid: number | null
          manual_handler_reason: string | null
          meeting_id: number | null
          previous_task_id: number | null
          product_id: number
          puuserid: number | null
          remarks: string | null
          subcampaign_id: number | null
          suggested_handler: string | null
          targetid: number | null
          taskdate: string
          taskid: number
          tasklistid: number
          taskowner: string | null
          taskstatus: Database["public"]["Enums"]["task_list_status"] | null
          updatedby: string | null
          updatedon: string | null
          workflow_status: string | null
        }
        Insert: {
          approval_by?: string | null
          approval_notes?: string | null
          approval_status?: string | null
          approved_at?: string | null
          calendar_event_id?: number | null
          closedby?: string | null
          closedon?: string | null
          companyid?: number | null
          contactid?: number | null
          description?: string | null
          enteredby: string
          enteredon?: string | null
          interactiontrid?: number | null
          leadid?: number | null
          manual_handler_reason?: string | null
          meeting_id?: number | null
          previous_task_id?: number | null
          product_id: number
          puuserid?: number | null
          remarks?: string | null
          subcampaign_id?: number | null
          suggested_handler?: string | null
          targetid?: number | null
          taskdate: string
          taskid: number
          tasklistid?: number
          taskowner?: string | null
          taskstatus?: Database["public"]["Enums"]["task_list_status"] | null
          updatedby?: string | null
          updatedon?: string | null
          workflow_status?: string | null
        }
        Update: {
          approval_by?: string | null
          approval_notes?: string | null
          approval_status?: string | null
          approved_at?: string | null
          calendar_event_id?: number | null
          closedby?: string | null
          closedon?: string | null
          companyid?: number | null
          contactid?: number | null
          description?: string | null
          enteredby?: string
          enteredon?: string | null
          interactiontrid?: number | null
          leadid?: number | null
          manual_handler_reason?: string | null
          meeting_id?: number | null
          previous_task_id?: number | null
          product_id?: number
          puuserid?: number | null
          remarks?: string | null
          subcampaign_id?: number | null
          suggested_handler?: string | null
          targetid?: number | null
          taskdate?: string
          taskid?: number
          tasklistid?: number
          taskowner?: string | null
          taskstatus?: Database["public"]["Enums"]["task_list_status"] | null
          updatedby?: string | null
          updatedon?: string | null
          workflow_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_tasklist_meeting"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_tasklist_previous_task"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "fk_tasklist_previous_task"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist_enriched"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "fk_tasklist_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_tasklist_taskid"
            columns: ["taskid"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_closedby_fkey"
            columns: ["closedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_closedby_fkey"
            columns: ["closedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasklist_companyid_fkey"
            columns: ["companyid"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_contactid_fkey"
            columns: ["contactid"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_enteredby_fkey"
            columns: ["enteredby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_enteredby_fkey"
            columns: ["enteredby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasklist_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_previous_task_id_fkey"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "tasklist_previous_task_id_fkey"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist_enriched"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "tasklist_puuserid_fkey"
            columns: ["puuserid"]
            isOneToOne: false
            referencedRelation: "puusers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_subcampaign_id_fkey"
            columns: ["subcampaign_id"]
            isOneToOne: false
            referencedRelation: "subcampaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_taskid_fkey"
            columns: ["taskid"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_taskowner_fkey"
            columns: ["taskowner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_taskowner_fkey"
            columns: ["taskowner"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasklist_updatedby_fkey"
            columns: ["updatedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_updatedby_fkey"
            columns: ["updatedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tasks: {
        Row: {
          details: string | null
          due_from_activation_days: number | null
          entered_by: string
          entered_on: string | null
          id: number
          product_id: number
          responsibility: string | null
          status: Database["public"]["Enums"]["task_status"]
          task: string
          task_due_limit_days: number | null
          task_when: string | null
          who_to_contact: string | null
        }
        Insert: {
          details?: string | null
          due_from_activation_days?: number | null
          entered_by: string
          entered_on?: string | null
          id?: number
          product_id: number
          responsibility?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          task: string
          task_due_limit_days?: number | null
          task_when?: string | null
          who_to_contact?: string | null
        }
        Update: {
          details?: string | null
          due_from_activation_days?: number | null
          entered_by?: string
          entered_on?: string | null
          id?: number
          product_id?: number
          responsibility?: string | null
          status?: Database["public"]["Enums"]["task_status"]
          task?: string
          task_due_limit_days?: number | null
          task_when?: string | null
          who_to_contact?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_entered_by_fkey"
            columns: ["entered_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          assigned_by: string | null
          created_at: string
          id: number
          is_active: boolean
          joined_at: string
          role_in_team: string
          team_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_by?: string | null
          created_at?: string
          id?: number
          is_active?: boolean
          joined_at?: string
          role_in_team?: string
          team_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_by?: string | null
          created_at?: string
          id?: number
          is_active?: boolean
          joined_at?: string
          role_in_team?: string
          team_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          id: number
          is_active: boolean
          manager_id: string | null
          name: string
          product_id: number
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean
          manager_id?: string | null
          name: string
          product_id: number
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: number
          is_active?: boolean
          manager_id?: string | null
          name?: string
          product_id?: number
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      theme_contacts: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          company_id: number | null
          contact_id: number
          created_at: string | null
          id: number
          notes: string | null
          pre_invitation_id: number | null
          product_id: number
          theme_id: number
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          company_id?: number | null
          contact_id: number
          created_at?: string | null
          id?: number
          notes?: string | null
          pre_invitation_id?: number | null
          product_id: number
          theme_id: number
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          company_id?: number | null
          contact_id?: number
          created_at?: string | null
          id?: number
          notes?: string | null
          pre_invitation_id?: number | null
          product_id?: number
          theme_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "theme_contacts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "theme_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "theme_contacts_pre_invitation_id_fkey"
            columns: ["pre_invitation_id"]
            isOneToOne: false
            referencedRelation: "event_pre_invitations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "theme_contacts_theme_id_fkey"
            columns: ["theme_id"]
            isOneToOne: false
            referencedRelation: "event_themes"
            referencedColumns: ["id"]
          },
        ]
      }
      training_courses: {
        Row: {
          id: number
          training_course_code: string | null
          training_course_name: string | null
          training_course_status: string | null
        }
        Insert: {
          id?: number
          training_course_code?: string | null
          training_course_name?: string | null
          training_course_status?: string | null
        }
        Update: {
          id?: number
          training_course_code?: string | null
          training_course_name?: string | null
          training_course_status?: string | null
        }
        Relationships: []
      }
      user_course_stg: {
        Row: {
          activated_by: number | null
          activated_on: string | null
          air_id: number | null
          contact_code: number | null
          course_completed_on: string | null
          course_feedback: string | null
          course_id: number | null
          course_percentage: number | null
          course_source: string | null
          course_started_on: string | null
          course_status: string | null
          final_course_status: string | null
          kb_user_id: number | null
          mail_sent_status: number | null
          rpt_filename: string | null
          upload_status: string | null
          user_course_id: number
          user_id: number | null
        }
        Insert: {
          activated_by?: number | null
          activated_on?: string | null
          air_id?: number | null
          contact_code?: number | null
          course_completed_on?: string | null
          course_feedback?: string | null
          course_id?: number | null
          course_percentage?: number | null
          course_source?: string | null
          course_started_on?: string | null
          course_status?: string | null
          final_course_status?: string | null
          kb_user_id?: number | null
          mail_sent_status?: number | null
          rpt_filename?: string | null
          upload_status?: string | null
          user_course_id: number
          user_id?: number | null
        }
        Update: {
          activated_by?: number | null
          activated_on?: string | null
          air_id?: number | null
          contact_code?: number | null
          course_completed_on?: string | null
          course_feedback?: string | null
          course_id?: number | null
          course_percentage?: number | null
          course_source?: string | null
          course_started_on?: string | null
          course_status?: string | null
          final_course_status?: string | null
          kb_user_id?: number | null
          mail_sent_status?: number | null
          rpt_filename?: string | null
          upload_status?: string | null
          user_course_id?: number
          user_id?: number | null
        }
        Relationships: []
      }
      user_email_signatures: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: number
          is_default: boolean | null
          signature_html: string
          signature_name: string | null
          updated_at: string | null
          updated_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_default?: boolean | null
          signature_html: string
          signature_name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: number
          is_default?: boolean | null
          signature_html?: string
          signature_name?: string | null
          updated_at?: string | null
          updated_by?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_gmail_tokens: {
        Row: {
          access_token: string
          created_at: string | null
          email_address: string
          id: string
          refresh_token: string
          scopes: string[]
          token_expires_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          access_token: string
          created_at?: string | null
          email_address: string
          id?: string
          refresh_token: string
          scopes: string[]
          token_expires_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          access_token?: string
          created_at?: string | null
          email_address?: string
          id?: string
          refresh_token?: string
          scopes?: string[]
          token_expires_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          company_view_layout: string | null
          created_at: string | null
          id: string
          onboarding_completed: boolean | null
          onboarding_completed_at: string | null
          open_in_new_tab: boolean | null
          theme_style: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_view_layout?: string | null
          created_at?: string | null
          id?: string
          onboarding_completed?: boolean | null
          onboarding_completed_at?: string | null
          open_in_new_tab?: boolean | null
          theme_style?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company_view_layout?: string | null
          created_at?: string | null
          id?: string
          onboarding_completed?: boolean | null
          onboarding_completed_at?: string | null
          open_in_new_tab?: boolean | null
          theme_style?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_product_assignments: {
        Row: {
          created_at: string
          created_by: string | null
          id: number
          product_id: number
          updated_at: string
          updated_by: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: number
          product_id: number
          updated_at?: string
          updated_by?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: number
          product_id?: number
          updated_at?: string
          updated_by?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_product_assignments_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_product_assignments_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          created_at: string
          id: string
          is_active: boolean
          role_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          role_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          created_at?: string
          id?: string
          is_active?: boolean
          role_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "user_roles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_training_courses: {
        Row: {
          activated_by: number | null
          activated_on: string | null
          course_completed_on: string | null
          course_id: number | null
          course_source: string | null
          course_started_on: string | null
          course_status: string | null
          final_course_status: string | null
          ibisuser_id: number | null
          id: number
          mail_sent_status: number | null
        }
        Insert: {
          activated_by?: number | null
          activated_on?: string | null
          course_completed_on?: string | null
          course_id?: number | null
          course_source?: string | null
          course_started_on?: string | null
          course_status?: string | null
          final_course_status?: string | null
          ibisuser_id?: number | null
          id?: number
          mail_sent_status?: number | null
        }
        Update: {
          activated_by?: number | null
          activated_on?: string | null
          course_completed_on?: string | null
          course_id?: number | null
          course_source?: string | null
          course_started_on?: string | null
          course_status?: string | null
          final_course_status?: string | null
          ibisuser_id?: number | null
          id?: number
          mail_sent_status?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_training_courses_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "training_courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_training_courses_ibisuser_id_fkey"
            columns: ["ibisuser_id"]
            isOneToOne: false
            referencedRelation: "ibisusers"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_user_id: string | null
          company_id: number | null
          contact_id: number | null
          created_at: string | null
          created_by: string | null
          department_id: number | null
          id: string
          prime_company_id: number | null
          prime_contact_id: number | null
          role_id: number | null
          status: string | null
          updated_at: string | null
          updated_by: string | null
          username: string
        }
        Insert: {
          auth_user_id?: string | null
          company_id?: number | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          department_id?: number | null
          id?: string
          prime_company_id?: number | null
          prime_contact_id?: number | null
          role_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
          username: string
        }
        Update: {
          auth_user_id?: string | null
          company_id?: number | null
          contact_id?: number | null
          created_at?: string | null
          created_by?: string | null
          department_id?: number | null
          id?: string
          prime_company_id?: number | null
          prime_contact_id?: number | null
          role_id?: number | null
          status?: string | null
          updated_at?: string | null
          updated_by?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_users_role"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_department_id_fkey"
            columns: ["department_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      viewer_audit_log: {
        Row: {
          contact_id: number | null
          created_at: string
          event_hash: string
          event_timestamp: string
          event_type: string
          id: number
          ip_hash: string | null
          metadata: Json | null
          prev_event_hash: string | null
          quotation_id: number | null
          recipient_email: string
          related_document_id: number | null
          related_document_type: string | null
          session_id: string | null
          token_jti: string | null
          user_agent_hash: string | null
        }
        Insert: {
          contact_id?: number | null
          created_at?: string
          event_hash: string
          event_timestamp?: string
          event_type: string
          id?: never
          ip_hash?: string | null
          metadata?: Json | null
          prev_event_hash?: string | null
          quotation_id?: number | null
          recipient_email: string
          related_document_id?: number | null
          related_document_type?: string | null
          session_id?: string | null
          token_jti?: string | null
          user_agent_hash?: string | null
        }
        Update: {
          contact_id?: number | null
          created_at?: string
          event_hash?: string
          event_timestamp?: string
          event_type?: string
          id?: never
          ip_hash?: string | null
          metadata?: Json | null
          prev_event_hash?: string | null
          quotation_id?: number | null
          recipient_email?: string
          related_document_id?: number | null
          related_document_type?: string | null
          session_id?: string | null
          token_jti?: string | null
          user_agent_hash?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "viewer_audit_log_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_audit_log_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      viewer_decisions: {
        Row: {
          audit_log_id: number | null
          decided_at: string
          decision_by_email: string
          decision_by_name: string | null
          decision_type: string
          id: number
          notes: string | null
          quotation_id: number
          quotation_option_id: number | null
          rejection_reason: string | null
          session_id: string
        }
        Insert: {
          audit_log_id?: number | null
          decided_at?: string
          decision_by_email: string
          decision_by_name?: string | null
          decision_type: string
          id?: never
          notes?: string | null
          quotation_id: number
          quotation_option_id?: number | null
          rejection_reason?: string | null
          session_id: string
        }
        Update: {
          audit_log_id?: number | null
          decided_at?: string
          decision_by_email?: string
          decision_by_name?: string | null
          decision_type?: string
          id?: never
          notes?: string | null
          quotation_id?: number
          quotation_option_id?: number | null
          rejection_reason?: string | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "viewer_decisions_audit_log_id_fkey"
            columns: ["audit_log_id"]
            isOneToOne: false
            referencedRelation: "viewer_audit_log"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_decisions_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_decisions_quotation_option_id_fkey"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
        ]
      }
      viewer_otps: {
        Row: {
          attempt_count: number
          created_at: string
          email: string
          expires_at: string
          id: number
          locked_until: string | null
          otp_hash: string
          verified_at: string | null
          viewer_token_id: number
        }
        Insert: {
          attempt_count?: number
          created_at?: string
          email: string
          expires_at: string
          id?: never
          locked_until?: string | null
          otp_hash: string
          verified_at?: string | null
          viewer_token_id: number
        }
        Update: {
          attempt_count?: number
          created_at?: string
          email?: string
          expires_at?: string
          id?: never
          locked_until?: string | null
          otp_hash?: string
          verified_at?: string | null
          viewer_token_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "viewer_otps_viewer_token_id_fkey"
            columns: ["viewer_token_id"]
            isOneToOne: false
            referencedRelation: "viewer_tokens"
            referencedColumns: ["id"]
          },
        ]
      }
      viewer_sessions: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: number
          ip_hash: string | null
          last_step_up_at: string | null
          otp_verified_at: string
          revoked_at: string | null
          session_id: string
          user_agent_hash: string | null
          viewer_token_id: number
        }
        Insert: {
          created_at?: string
          email: string
          expires_at: string
          id?: never
          ip_hash?: string | null
          last_step_up_at?: string | null
          otp_verified_at: string
          revoked_at?: string | null
          session_id: string
          user_agent_hash?: string | null
          viewer_token_id: number
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: never
          ip_hash?: string | null
          last_step_up_at?: string | null
          otp_verified_at?: string
          revoked_at?: string | null
          session_id?: string
          user_agent_hash?: string | null
          viewer_token_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "viewer_sessions_viewer_token_id_fkey"
            columns: ["viewer_token_id"]
            isOneToOne: false
            referencedRelation: "viewer_tokens"
            referencedColumns: ["id"]
          },
        ]
      }
      viewer_signatures: {
        Row: {
          audit_log_id: number | null
          id: number
          ip_hash: string | null
          quotation_id: number
          quotation_option_id: number | null
          session_id: string
          signature_data: string | null
          signature_type: string
          signed_at: string
          signed_pdf_url: string | null
          signer_email: string
          signer_name: string | null
          signer_title: string | null
        }
        Insert: {
          audit_log_id?: number | null
          id?: never
          ip_hash?: string | null
          quotation_id: number
          quotation_option_id?: number | null
          session_id: string
          signature_data?: string | null
          signature_type: string
          signed_at?: string
          signed_pdf_url?: string | null
          signer_email: string
          signer_name?: string | null
          signer_title?: string | null
        }
        Update: {
          audit_log_id?: number | null
          id?: never
          ip_hash?: string | null
          quotation_id?: number
          quotation_option_id?: number | null
          session_id?: string
          signature_data?: string | null
          signature_type?: string
          signed_at?: string
          signed_pdf_url?: string | null
          signer_email?: string
          signer_name?: string | null
          signer_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "viewer_signatures_audit_log_id_fkey"
            columns: ["audit_log_id"]
            isOneToOne: false
            referencedRelation: "viewer_audit_log"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_signatures_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_signatures_quotation_option_id_fkey"
            columns: ["quotation_option_id"]
            isOneToOne: false
            referencedRelation: "quotation_options"
            referencedColumns: ["id"]
          },
        ]
      }
      viewer_tokens: {
        Row: {
          company_id: number | null
          contact_id: number | null
          created_at: string
          created_by: string | null
          expires_at: string
          id: number
          jti: string
          quotation_id: number
          recipient_email: string
          revoked_at: string | null
          revoked_reason: string | null
          token_hash: string
        }
        Insert: {
          company_id?: number | null
          contact_id?: number | null
          created_at?: string
          created_by?: string | null
          expires_at: string
          id?: never
          jti: string
          quotation_id: number
          recipient_email: string
          revoked_at?: string | null
          revoked_reason?: string | null
          token_hash: string
        }
        Update: {
          company_id?: number | null
          contact_id?: number | null
          created_at?: string
          created_by?: string | null
          expires_at?: string
          id?: never
          jti?: string
          quotation_id?: number
          recipient_email?: string
          revoked_at?: string | null
          revoked_reason?: string | null
          token_hash?: string
        }
        Relationships: [
          {
            foreignKeyName: "viewer_tokens_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_tokens_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "viewer_tokens_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      zones: {
        Row: {
          id: number
          zone: string
        }
        Insert: {
          id?: number
          zone: string
        }
        Update: {
          id?: number
          zone?: string
        }
        Relationships: []
      }
    }
    Views: {
      campaigns_enriched: {
        Row: {
          code: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: number | null
          name: string | null
          owner_id: string | null
          owner_name: string | null
          product_id: number | null
          product_name: string | null
          start_date: string | null
          status: Database["public"]["Enums"]["campaign_status"] | null
          subcampaigns_count: number | null
          updated_at: string | null
          updated_by: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "campaigns_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaigns_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "campaigns_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "campaigns_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      company_credit_balance: {
        Row: {
          company_id: number | null
          currency: string | null
          current_balance: number | null
          last_transaction_date: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_credit_ledger_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      tasklist_enriched: {
        Row: {
          assignee_username: string | null
          calendar_event_id: number | null
          closedon: string | null
          company_name: string | null
          companyid: number | null
          contact_name: string | null
          contactid: number | null
          enteredby: string | null
          enteredon: string | null
          lead_name: string | null
          leadid: number | null
          meeting_id: number | null
          meeting_title: string | null
          previous_task_id: number | null
          product_id: number | null
          puuser_name: string | null
          puuserid: number | null
          remarks: string | null
          sort_priority: number | null
          task_name: string | null
          taskdate: string | null
          taskid: number | null
          tasklistid: number | null
          taskowner: string | null
          taskstatus: Database["public"]["Enums"]["task_list_status"] | null
          updatedby: string | null
          updatedon: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_tasklist_meeting"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_tasklist_previous_task"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "fk_tasklist_previous_task"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist_enriched"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "fk_tasklist_product_id"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_tasklist_taskid"
            columns: ["taskid"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_companyid_fkey"
            columns: ["companyid"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_contactid_fkey"
            columns: ["contactid"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_enteredby_fkey"
            columns: ["enteredby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_enteredby_fkey"
            columns: ["enteredby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasklist_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_previous_task_id_fkey"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "tasklist_previous_task_id_fkey"
            columns: ["previous_task_id"]
            isOneToOne: false
            referencedRelation: "tasklist_enriched"
            referencedColumns: ["tasklistid"]
          },
          {
            foreignKeyName: "tasklist_puuserid_fkey"
            columns: ["puuserid"]
            isOneToOne: false
            referencedRelation: "puusers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_taskid_fkey"
            columns: ["taskid"]
            isOneToOne: false
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasklist_taskowner_fkey"
            columns: ["taskowner"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_taskowner_fkey"
            columns: ["taskowner"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "tasklist_updatedby_fkey"
            columns: ["updatedby"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
          {
            foreignKeyName: "tasklist_updatedby_fkey"
            columns: ["updatedby"]
            isOneToOne: false
            referencedRelation: "v_user_product"
            referencedColumns: ["user_id"]
          },
        ]
      }
      v_job_run_stats: {
        Row: {
          active: boolean | null
          avg_duration_ms: number | null
          failure_count: number | null
          jobid: number | null
          jobname: string | null
          last_run_at: string | null
          schedule: string | null
          success_count: number | null
          total_runs: number | null
        }
        Relationships: []
      }
      v_user_product: {
        Row: {
          product_id: number | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_user_product_assignments_product"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_product_assignments_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      aggregate_campaign_metrics: {
        Args: { p_campaign_id: number }
        Returns: Json
      }
      apply_dataset_filter: {
        Args: { _action_name: string; _module_name: string; _user_id?: string }
        Returns: string
      }
      build_criteria_where_clause: { Args: { criteria: Json }; Returns: string }
      bulk_apply_sfs_to_linked_companies: { Args: never; Returns: Json }
      bulk_link_companies_by_domain: { Args: never; Returns: Json }
      bulk_update_company_sfs: {
        Args: {
          p_record_ids: number[]
          p_target_sfs_id: number
          p_user_id?: string
        }
        Returns: Json
      }
      calculate_and_set_ntd: {
        Args: {
          p_company_id: number
          p_product_id: number
          p_task_id?: number
          p_task_status?: string
          p_trigger_type: string
          p_user_id?: string
        }
        Returns: Json
      }
      calendar_has_edit_or_admin: {
        Args: { p_calendar_id: number; p_user_id?: string }
        Returns: boolean
      }
      calendar_is_owned_by_user: {
        Args: { p_calendar_id: number; p_user_id?: string }
        Returns: boolean
      }
      calendar_is_shared_with_user: {
        Args: { p_calendar_id: number; p_user_id?: string }
        Returns: boolean
      }
      can_cancel_proforma: {
        Args: { p_quotation_id: number }
        Returns: boolean
      }
      can_manage_lead_linking: {
        Args: { _product_id: number }
        Returns: boolean
      }
      can_manage_users: { Args: never; Returns: boolean }
      check_calendar_event_ownership: {
        Args: { event_id: number }
        Returns: boolean
      }
      check_document_access: {
        Args: {
          p_document_id: number
          p_required_permission?: string
          p_user_id?: string
        }
        Returns: boolean
      }
      check_duplicate_saved_search: {
        Args: {
          p_criteria: Json
          p_name: string
          p_owner_id: string
          p_search_id?: number
        }
        Returns: boolean
      }
      check_module_permission: {
        Args: {
          _action_code: string
          _module_name: string
          _product_id?: number
          _user_id?: string
        }
        Returns: boolean
      }
      check_module_view_permission: {
        Args: { _module_id: number; _product_id?: number }
        Returns: boolean
      }
      check_mp_tasks_without_handlers: {
        Args: never
        Returns: {
          companyid: number
          created_at: string
          missing_handler: boolean
          product_id: number
          tasklistid: number
          taskowner: string
        }[]
      }
      check_multiple_permissions: {
        Args: { _permissions_json: Json; _user_id?: string }
        Returns: {
          has_permission: boolean
          permission_key: string
        }[]
      }
      check_user_role: {
        Args: { _role_name?: string; _user_id?: string }
        Returns: boolean
      }
      cleanup_abandoned_draft_quotations: { Args: never; Returns: number }
      complete_quotation: {
        Args: { p_data: Json; p_quotation_id: number }
        Returns: Json
      }
      complete_tour: {
        Args: { p_tour_id: string; p_user_id: string }
        Returns: undefined
      }
      create_recipient_list: {
        Args: {
          p_campaign_dataset_id: number
          p_list_name: string
          p_subcampaign_id?: number
        }
        Returns: number
      }
      create_recipient_list_for_wizard: {
        Args: {
          p_campaign_dataset_id: number
          p_name: string
          p_product_id?: number
          p_subcampaign_id?: number
        }
        Returns: number
      }
      create_recipient_list_from_criteria: {
        Args: {
          p_campaign_dataset_id: number
          p_list_name: string
          p_subcampaign_id?: number
        }
        Returns: {
          excluded_contacts: number
          recipient_list_id: number
          total_contacts: number
          valid_emails: number
        }[]
      }
      delete_subcampaign_for_wizard: {
        Args: { p_subcampaign_id: number }
        Returns: boolean
      }
      dismiss_hint: {
        Args: { p_hint_id: string; p_user_id: string }
        Returns: undefined
      }
      expire_competitor_subscriptions: { Args: never; Returns: undefined }
      extract_url_domain: { Args: { url: string }; Returns: string }
      generate_campaign_code: {
        Args: { id_val: number; prefix: string }
        Returns: string
      }
      generate_document_reference: {
        Args: { p_department_id: number; p_document_type_code: string }
        Returns: string
      }
      generate_proforma_number: { Args: never; Returns: string }
      get_bulletin_stats: {
        Args: {
          p_bulletin_id?: number
          p_bulletin_ids?: number[]
          p_date_from?: string
          p_date_to?: string
        }
        Returns: Json
      }
      get_collections_for_qb_sync: {
        Args: never
        Returns: {
          amount: number
          company_name: string
          id: number
          payment_reference: string
          quickbooks_payment_id: string
          quickbooks_sync_error: string
          quickbooks_sync_status: string
          quickbooks_synced_at: string
        }[]
      }
      get_cron_jobs: {
        Args: never
        Returns: {
          active: boolean
          command: string
          jobid: number
          jobname: string
          schedule: string
        }[]
      }
      get_current_user_calendar_permissions: {
        Args: { event_id: number }
        Returns: Database["public"]["Enums"]["calendar_permission_type"][]
      }
      get_current_user_id: { Args: never; Returns: string }
      get_current_user_products: { Args: never; Returns: number[] }
      get_current_user_role: { Args: never; Returns: string }
      get_dataset_companies_filtered: {
        Args: { p_dataset_id: number }
        Returns: {
          company_id: number
          company_name: string
          contact_count: number
        }[]
      }
      get_dataset_recipient_lists_stats: {
        Args: { p_campaign_dataset_id: number }
        Returns: Json
      }
      get_deletion_dependencies: {
        Args: { _record_id: number; _table_name: string }
        Returns: {
          dependent_table: string
          description: string
          record_count: number
        }[]
      }
      get_earliest_open_reminder: {
        Args: { p_company_id: number; p_product_id: number }
        Returns: {
          due_date: string
          reminder_id: number
        }[]
      }
      get_filtered_company_ids:
        | {
            Args: {
              p_auto_renewal?: boolean
              p_competitor_created_by?: string[]
              p_competitor_created_from?: string
              p_competitor_created_to?: string
              p_competitor_end_from?: string
              p_competitor_end_to?: string
              p_competitor_ids?: number[]
              p_competitor_product_ids?: number[]
              p_competitor_updated_by?: string[]
              p_competitor_updated_from?: string
              p_competitor_updated_to?: string
              p_handler_assigned_from?: string
              p_handler_assigned_to?: string
              p_handler_type_ids?: number[]
              p_handler_user_ids?: string[]
              p_has_analytics?: boolean
              p_has_ibis?: boolean
              p_has_integration?: boolean
              p_has_research?: boolean
              p_permission_ids?: number[]
              p_sfs_ids?: number[]
              p_sfs_product_ids?: number[]
              p_subscription_created_from?: string
              p_subscription_created_to?: string
              p_subscription_end_from?: string
              p_subscription_end_to?: string
              p_subscription_start_from?: string
              p_subscription_start_to?: string
              p_subscription_status?: string[]
              p_user_count_max?: number
              p_user_count_min?: number
            }
            Returns: {
              id: number
            }[]
          }
        | {
            Args: {
              p_auto_renewal?: boolean
              p_competitor_created_by?: string[]
              p_competitor_created_from?: string
              p_competitor_created_to?: string
              p_competitor_end_from?: string
              p_competitor_end_to?: string
              p_competitor_ids?: number[]
              p_competitor_product_ids?: number[]
              p_competitor_updated_by?: string[]
              p_competitor_updated_from?: string
              p_competitor_updated_to?: string
              p_handler_assigned_from?: string
              p_handler_assigned_to?: string
              p_handler_type_ids?: number[]
              p_handler_user_ids?: string[]
              p_has_analytics?: boolean
              p_has_ibis?: boolean
              p_has_integration?: boolean
              p_has_research?: boolean
              p_permission_ids?: number[]
              p_renewal_status?: string[]
              p_sfs_ids?: number[]
              p_sfs_product_ids?: number[]
              p_subscription_created_from?: string
              p_subscription_created_to?: string
              p_subscription_end_from?: string
              p_subscription_end_to?: string
              p_subscription_start_from?: string
              p_subscription_start_to?: string
              p_subscription_status?: string[]
              p_user_count_max?: number
              p_user_count_min?: number
            }
            Returns: {
              id: number
            }[]
          }
      get_filtered_users: {
        Args: { _user_id?: string }
        Returns: {
          company_name: string
          created_at: string
          email: string
          id: number
          role_name: string
          status: string
          updated_at: string
          username: string
        }[]
      }
      get_handler_performance: {
        Args: {
          p_from_date?: string
          p_handler_id?: number
          p_include_contacts_created?: boolean
          p_include_irs_closed?: boolean
          p_include_keycontacts_added?: boolean
          p_include_projects_approved?: boolean
          p_include_projects_created?: boolean
          p_include_projects_reviewed?: boolean
          p_include_projects_submitted?: boolean
          p_to_date?: string
        }
        Returns: {
          contacts_created: number
          handler_id: number
          handler_name: string
          irs_closed: number
          keycontacts_added: number
          projects_approved: number
          projects_created: number
          projects_reviewed: number
          projects_submitted: number
        }[]
      }
      get_ibis_usage_statistics:
        | {
            Args: {
              p_company_id: number
              p_from_date: string
              p_site_ids?: number[]
              p_to_date: string
              p_user_id?: number
            }
            Returns: Json
          }
        | {
            Args: {
              p_company_id: number
              p_from_date: string
              p_site_ids?: number[]
              p_to_date: string
              p_user_id?: number
              p_user_ids?: number[]
            }
            Returns: Json
          }
        | {
            Args: {
              p_company_id: number
              p_from_date: string
              p_site_ids?: number[]
              p_to_date: string
              p_user_ids?: number[]
            }
            Returns: Json
          }
      get_interaction_tasks: {
        Args: { p_interaction_id: number }
        Returns: {
          created_at: string
          task_id: number
        }[]
      }
      get_invoices_for_qb_sync: {
        Args: never
        Returns: {
          company_name: string
          currency: string
          id: number
          invoice_number: string
          quickbooks_invoice_id: string
          quickbooks_sync_error: string
          quickbooks_sync_status: string
          quickbooks_synced_at: string
          total: number
        }[]
      }
      get_job_run_count: {
        Args: {
          p_date_from?: string
          p_date_to?: string
          p_job_id?: number
          p_status?: string
        }
        Returns: number
      }
      get_job_run_history: {
        Args: {
          p_date_from?: string
          p_date_to?: string
          p_job_id?: number
          p_limit?: number
          p_offset?: number
          p_status?: string
        }
        Returns: {
          command: string
          database: string
          end_time: string
          job_pid: number
          jobid: number
          return_message: string
          runid: number
          start_time: string
          status: string
          username: string
        }[]
      }
      get_job_stats: {
        Args: never
        Returns: {
          active: boolean
          avg_duration_ms: number
          failure_count: number
          jobid: number
          jobname: string
          last_run_at: string
          schedule: string
          success_count: number
          total_runs: number
        }[]
      }
      get_max_receipt_sequence: {
        Args: { year_prefix: string }
        Returns: number
      }
      get_recipient_list_stats: {
        Args: { p_campaign_dataset_id: number }
        Returns: Json
      }
      get_recipient_preview_stats: {
        Args: { p_campaign_dataset_id: number }
        Returns: {
          excluded_contacts: number
          generated_at: string
          total_contacts: number
          valid_emails: number
        }[]
      }
      get_sector_kpi_matrix: {
        Args: {
          p_countries?: string[]
          p_exclude_master_projects?: boolean
          p_exclude_signpost_ids?: number[]
          p_include_companies?: boolean
          p_include_cud?: boolean
          p_include_dnt?: boolean
          p_include_keycontacts?: boolean
          p_max_value?: number
          p_min_value?: number
          p_stage_ids?: number[]
        }
        Returns: {
          company_availability: number
          contacts_percent: number
          country: string
          cud_percent: number
          dnt_percent: number
          project_count: number
          sector: string
        }[]
      }
      get_sector_kpi_matrix_v2: {
        Args: {
          p_countries?: string[]
          p_exclude_master_projects?: boolean
          p_exclude_signpost_ids?: number[]
          p_include_companies?: boolean
          p_include_cud?: boolean
          p_include_dnt?: boolean
          p_include_keycontacts?: boolean
          p_max_value?: number
          p_min_value?: number
          p_stage_ids?: number[]
        }
        Returns: {
          company_availability: number
          contacts_percent: number
          country: string
          cud_percent: number
          dnt_percent: number
          project_count: number
          sector: string
        }[]
      }
      get_subcampaign_social_metrics: {
        Args: { p_subcampaign_id: number }
        Returns: Json
      }
      get_subcampaign_task_stats: {
        Args: { p_subcampaign_id: number }
        Returns: Json
      }
      get_task_chain_for_lead: {
        Args: { p_lead_id: number }
        Returns: {
          calendar_event_id: number
          closedon: string
          enteredon: string
          previous_task_id: number
          remarks: string
          task_order: number
          taskdate: string
          taskid: number
          tasklistid: number
          taskstatus: string
        }[]
      }
      get_task_interactions: {
        Args: { p_task_id: number }
        Returns: {
          created_at: string
          created_by: string
          interaction_id: number
          interaction_type_id: number
        }[]
      }
      get_unsynced_events: {
        Args: { hours_back?: number }
        Returns: {
          calendar_collection_id: number
          created_at: string
          event_id: number
          integration_id: number
          title: string
        }[]
      }
      get_user_accessible_menus: {
        Args: never
        Returns: {
          icon: string
          id: number
          is_active: boolean
          label: string
          parent_menu_id: number
          path: string
          sort_order: number
        }[]
      }
      get_user_calendar_permissions: {
        Args: { p_calendar_id: number; p_user_id?: string }
        Returns: string
      }
      get_user_effective_permissions: {
        Args: { _module_name: string; _user_id?: string }
        Returns: {
          action_code: string
          dataset_code: string
          dataset_filter: string
          is_allowed: boolean
        }[]
      }
      get_user_module_permissions: {
        Args: { _module_name: string; _user_id?: string }
        Returns: {
          action_code: string
          dataset_code: string
          dataset_filter: string
          is_allowed: boolean
          module_name: string
        }[]
      }
      get_user_pending_approvals: {
        Args: { p_user_id?: string }
        Returns: {
          approval_deadline: string
          current_step: number
          document_reference: string
          document_version_id: number
          initiated_at: string
          status: string
          total_steps: number
          workflow_id: number
          workflow_name: string
        }[]
      }
      get_user_product_ids: { Args: never; Returns: number[] }
      get_user_team_ids: { Args: { _user_id?: string }; Returns: number[] }
      has_ibis_filters: { Args: { criteria: Json }; Returns: boolean }
      has_internal_company_access: { Args: never; Returns: boolean }
      has_iris_role: { Args: { _role_name: string }; Returns: boolean }
      has_product_access: { Args: { _product_id: number }; Returns: boolean }
      has_role: { Args: { _role_name: string }; Returns: boolean }
      has_role_multi: { Args: { _role_name: string }; Returns: boolean }
      has_sfs_filters: { Args: { criteria: Json }; Returns: boolean }
      initiate_document_approval:
        | {
            Args: {
              p_approval_deadline: string
              p_approval_strategy: Database["public"]["Enums"]["approval_strategy"]
              p_approvers: Json
              p_document_id: number
              p_requester_notes?: string
              p_workflow_name: string
            }
            Returns: number
          }
        | {
            Args: {
              p_document_version_id: number
              p_requester_notes?: string
              p_steps: Json
              p_workflow_name: string
            }
            Returns: number
          }
      insert_company_document: {
        Args: {
          p_amount?: number
          p_company_id: number
          p_contact_id: number
          p_created_by?: string
          p_currency?: string
          p_document_date?: string
          p_document_type: string
          p_file_name?: string
          p_reference_number: string
          p_s3_url: string
          p_source_id: number
          p_source_table: string
        }
        Returns: number
      }
      is_shared_with_user: {
        Args: { _search_id: number; _user_id: string }
        Returns: boolean
      }
      log_document_access: {
        Args: {
          p_action: string
          p_document_id: number
          p_ip_address?: string
          p_permission_granted: boolean
          p_user_agent?: string
        }
        Returns: undefined
      }
      materialize_recipient_list:
        | { Args: { p_recipient_list_id: number }; Returns: undefined }
        | {
            Args: { p_recipient_list_id: number; p_template_category?: string }
            Returns: undefined
          }
      materialize_recipient_list_api: {
        Args: { p_recipient_list_id: number }
        Returns: undefined
      }
      materialize_recipient_list_direct:
        | {
            Args: { p_campaign_dataset_id: number }
            Returns: {
              company_name: string
              contact_id: number
              email: string
              first_name: string
              last_name: string
            }[]
          }
        | {
            Args: {
              p_criteria: Json
              p_recipient_list_id: number
              p_search_type?: string
            }
            Returns: number
          }
      owns_saved_search: {
        Args: { _search_id: number; _user_id: string }
        Returns: boolean
      }
      populate_dataset_contacts:
        | { Args: { p_dataset_id: number }; Returns: number }
        | {
            Args: {
              p_criteria: Json
              p_dataset_id: number
              p_search_type?: string
            }
            Returns: number
          }
      process_approval_action:
        | {
            Args: {
              p_action: Database["public"]["Enums"]["approval_step_status"]
              p_comments?: string
              p_forward_reason?: string
              p_forward_to_user_id?: string
              p_step_id: number
            }
            Returns: Json
          }
        | {
            Args: {
              p_action_type: string
              p_comments?: string
              p_step_id: number
              p_workflow_id: number
            }
            Returns: boolean
          }
      process_scheduled_email_jobs: { Args: never; Returns: undefined }
      recalculate_renewal_status: {
        Args: { p_subscription_id: number }
        Returns: string
      }
      refresh_company_handler_sender_cache: {
        Args: { p_product_id: number }
        Returns: Json
      }
      replace_template_variables: {
        Args: { p_template: string; p_variables: Json }
        Returns: string
      }
      reserve_quotation_reference: {
        Args: {
          p_company_id: number
          p_created_by: string
          p_currency?: string
          p_revised_from_id?: number
          p_revision_number?: number
        }
        Returns: Json
      }
      schedule_calendar_sync: { Args: never; Returns: undefined }
      search_companies_by_ids: {
        Args: {
          p_company_ids: number[]
          p_page?: number
          p_page_size?: number
          p_search?: string
          p_status?: string
        }
        Returns: {
          company_id: number
          total_count: number
        }[]
      }
      search_companies_by_lead_domain: {
        Args: { p_email: string; p_limit?: number }
        Returns: {
          address: string
          city: string
          company_type: string
          country: string
          email1: string
          email2: string
          email3: string
          id: number
          match_score: number
          match_type: string
          name: string
          status: string
          website1: string
          website2: string
          website3: string
        }[]
      }
      toggle_cron_job: {
        Args: { p_active: boolean; p_job_id: number }
        Returns: boolean
      }
      trigger_account_review_queue_processor: {
        Args: never
        Returns: undefined
      }
      trigger_notification_queue_processor: { Args: never; Returns: undefined }
      user_is_handler_for_company: {
        Args: { _companyid: number; _user_id: string }
        Returns: boolean
      }
      validate_engagement_segments: {
        Args: { segments: string }
        Returns: boolean
      }
    }
    Enums: {
      approval_step_status:
        | "pending"
        | "approved"
        | "rejected"
        | "skipped"
        | "reviewing"
        | "forwarded"
      approval_strategy:
        | "all_must_approve"
        | "any_can_decide"
        | "single_approver"
      approval_workflow_status: "pending" | "reviewed" | "approved" | "rejected"
      calendar_event_status:
        | "scheduled"
        | "completed"
        | "cancelled"
        | "postponed"
      calendar_event_type:
        | "meeting"
        | "task"
        | "reminder"
        | "holiday"
        | "appointment"
        | "deadline"
      calendar_permission_type:
        | "view"
        | "edit"
        | "delete"
        | "manage"
        | "calendar_view"
        | "calendar_edit"
        | "calendar_admin"
      campaign_status: "Scheduled" | "Active" | "Archived"
      collection_status:
        | "Pending"
        | "Completed"
        | "Failed"
        | "Cancelled"
        | "Collected"
      confidentiality_level:
        | "public"
        | "internal"
        | "confidential"
        | "restrictedcustom"
      document_action_type:
        | "created"
        | "viewed"
        | "downloaded"
        | "edited"
        | "uploaded_version"
        | "approved"
        | "rejected"
        | "deleted"
        | "shared"
        | "access_granted"
        | "access_revoked"
        | "archived"
        | "restored"
      document_flow_direction: "inbound" | "outbound" | "internal"
      document_permission_type:
        | "view"
        | "edit"
        | "approve"
        | "delete"
        | "adminrevise"
      document_status:
        | "draft"
        | "pending_approval"
        | "approved"
        | "published"
        | "revised"
        | "rejected"
        | "obsoleted"
      document_type:
        | "ProformaPDF"
        | "InvoicePDF"
        | "PO"
        | "BankTransferReceipt"
        | "SupportingDoc"
        | "ReceiptPDF"
        | "Other"
      email_template_category:
        | "Saudi Project Bulletin"
        | "Energy Bulletin"
        | "Special Offers from Our Partners"
        | "BNC Project Intelligence Updates & Special Offers"
        | "MEA Project Bulletin"
      event_location:
        | "BNC Intelligence Centre"
        | "Online"
        | "Hotel"
        | "Partners Location"
      event_type: "BNC Round Table Conference" | "Webinar" | "Partnership RTCs"
      integration_provider: "google_calendar" | "outlook" | "apple_calendar"
      invoice_status:
        | "Pending"
        | "Approved"
        | "Uncollected"
        | "Cancelled"
        | "Rejected"
        | "PartiallyPaid"
        | "FullyPaid"
        | "Overdue"
        | "Disputed"
        | "Generated"
      lead_status:
        | "Pending Verification"
        | "Assigned"
        | "Actioned"
        | "Trashed"
        | "Void"
        | "Verified"
      lead_type_enum:
        | "Self Lead"
        | "Demo Request"
        | "PU Registration"
        | "Whatsapp Chat"
        | "Email"
        | "Events"
        | "Other"
        | "Referral"
      payment_type: "BankTransfer" | "CreditCard" | "Cash" | "Cheque"
      proforma_status:
        | "Generated"
        | "Cancelled"
        | "Converted"
        | "Invoiced"
        | "Pending_Cancellation"
      quotation_status:
        | "draft"
        | "under_follow_up"
        | "invoiced"
        | "won"
        | "lost"
        | "void"
        | "proforma_invoiced"
      quotation_type: "new" | "renewal" | "upgrade"
      subcampaign_channel:
        | "Email"
        | "Web Form"
        | "SMS"
        | "LinkedIn"
        | "Facebook"
        | "Other"
        | "Twitter"
        | "Instagram"
      subcampaign_status:
        | "Draft"
        | "Scheduled"
        | "Running"
        | "Completed"
        | "Paused"
      subcampaign_type: "email" | "social" | "sms" | "other"
      sync_mode: "push" | "pull" | "bidirectional"
      sync_status: "active" | "paused" | "error" | "disconnected"
      task_list_status:
        | "Open"
        | "Void"
        | "Successful"
        | "Unsuccessful"
        | "Quote Requested"
        | "Draft"
      task_status: "Active" | "Inactive"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      approval_step_status: [
        "pending",
        "approved",
        "rejected",
        "skipped",
        "reviewing",
        "forwarded",
      ],
      approval_strategy: [
        "all_must_approve",
        "any_can_decide",
        "single_approver",
      ],
      approval_workflow_status: ["pending", "reviewed", "approved", "rejected"],
      calendar_event_status: [
        "scheduled",
        "completed",
        "cancelled",
        "postponed",
      ],
      calendar_event_type: [
        "meeting",
        "task",
        "reminder",
        "holiday",
        "appointment",
        "deadline",
      ],
      calendar_permission_type: [
        "view",
        "edit",
        "delete",
        "manage",
        "calendar_view",
        "calendar_edit",
        "calendar_admin",
      ],
      campaign_status: ["Scheduled", "Active", "Archived"],
      collection_status: [
        "Pending",
        "Completed",
        "Failed",
        "Cancelled",
        "Collected",
      ],
      confidentiality_level: [
        "public",
        "internal",
        "confidential",
        "restrictedcustom",
      ],
      document_action_type: [
        "created",
        "viewed",
        "downloaded",
        "edited",
        "uploaded_version",
        "approved",
        "rejected",
        "deleted",
        "shared",
        "access_granted",
        "access_revoked",
        "archived",
        "restored",
      ],
      document_flow_direction: ["inbound", "outbound", "internal"],
      document_permission_type: [
        "view",
        "edit",
        "approve",
        "delete",
        "adminrevise",
      ],
      document_status: [
        "draft",
        "pending_approval",
        "approved",
        "published",
        "revised",
        "rejected",
        "obsoleted",
      ],
      document_type: [
        "ProformaPDF",
        "InvoicePDF",
        "PO",
        "BankTransferReceipt",
        "SupportingDoc",
        "ReceiptPDF",
        "Other",
      ],
      email_template_category: [
        "Saudi Project Bulletin",
        "Energy Bulletin",
        "Special Offers from Our Partners",
        "BNC Project Intelligence Updates & Special Offers",
        "MEA Project Bulletin",
      ],
      event_location: [
        "BNC Intelligence Centre",
        "Online",
        "Hotel",
        "Partners Location",
      ],
      event_type: ["BNC Round Table Conference", "Webinar", "Partnership RTCs"],
      integration_provider: ["google_calendar", "outlook", "apple_calendar"],
      invoice_status: [
        "Pending",
        "Approved",
        "Uncollected",
        "Cancelled",
        "Rejected",
        "PartiallyPaid",
        "FullyPaid",
        "Overdue",
        "Disputed",
        "Generated",
      ],
      lead_status: [
        "Pending Verification",
        "Assigned",
        "Actioned",
        "Trashed",
        "Void",
        "Verified",
      ],
      lead_type_enum: [
        "Self Lead",
        "Demo Request",
        "PU Registration",
        "Whatsapp Chat",
        "Email",
        "Events",
        "Other",
        "Referral",
      ],
      payment_type: ["BankTransfer", "CreditCard", "Cash", "Cheque"],
      proforma_status: [
        "Generated",
        "Cancelled",
        "Converted",
        "Invoiced",
        "Pending_Cancellation",
      ],
      quotation_status: [
        "draft",
        "under_follow_up",
        "invoiced",
        "won",
        "lost",
        "void",
        "proforma_invoiced",
      ],
      quotation_type: ["new", "renewal", "upgrade"],
      subcampaign_channel: [
        "Email",
        "Web Form",
        "SMS",
        "LinkedIn",
        "Facebook",
        "Other",
        "Twitter",
        "Instagram",
      ],
      subcampaign_status: [
        "Draft",
        "Scheduled",
        "Running",
        "Completed",
        "Paused",
      ],
      subcampaign_type: ["email", "social", "sms", "other"],
      sync_mode: ["push", "pull", "bidirectional"],
      sync_status: ["active", "paused", "error", "disconnected"],
      task_list_status: [
        "Open",
        "Void",
        "Successful",
        "Unsuccessful",
        "Quote Requested",
        "Draft",
      ],
      task_status: ["Active", "Inactive"],
    },
  },
} as const
