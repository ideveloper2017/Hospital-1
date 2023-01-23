<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'specialty' => ['required', 'string'],
            'working_time' => ['required', 'string'],
            'experience' => ['required', 'string'],
            'contacts' => ['required', 'string'],
            'image'=> ['mimes:jpeg,jpg,png,gif|max:1000'],
        ];
    }
}