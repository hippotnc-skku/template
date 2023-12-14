<script lang="ts">
	import type { ModalPlacementType, SizeType } from './helpers/types';
	import { applyAction, enhance } from '$app/forms';
	import { Modal } from './helpers';
	import Button from './helpers/buttons/Button.svelte';
	import Checkbox from './helpers/forms/Checkbox.svelte';
	interface $$Props {
		title?: string;
		size?: SizeType;
		placement?:
			| 'top-left'
			| 'top-center'
			| 'top-right'
			| 'center-left'
			| 'center'
			| 'center-right'
			| 'bottom-left'
			| 'bottom-center'
			| 'bottom-right';
		autoclose?: boolean;
		permanent?: boolean;
		backdropClasses?: string;
		defaultClass?: string;
		outsideclose?: boolean;
		open?: boolean;
		data?: any;
	}

	// export let title: string = '';
	// export let size: SizeType = 'md';
	// export let placement: ModalPlacementType = 'center';
	// export let autoclose: boolean = false;
	// export let permanent: boolean = false;
	// export let backdropClasses: string = 'bg-gray-700 bg-opacity-50 dark:bg-opacity-80';
	// export let defaultClass: string = 'relative flex flex-col';
	// export let outsideclose: boolean = false;

	export let open = false;
	export let data = [];
	let step = data.length;
	let currentStep = 0;
	let makeCheckFalse = false;
</script>

{#if open && step !== currentStep}
	<Modal bind:open size="sm" title={data[currentStep]?.title} autoclose={false}>
		<form
			method="POST"
			use:enhance={({ action, data, form, controller, cancel, submitter }) => {
				return async ({ result }) => {
					currentStep++;
					makeCheckFalse = false;
					// `result` is an `ActionResult` object
					if (result.type === 'error') {
						await applyAction(result);
					}
				};
			}}
			action="/?/checkModal"
		>
			{@html data[currentStep].content}

			<div class="flex justify-between my-5">
				<div class="flex flex-col">
					{#if data[currentStep]?.link}
						<div class="flex items-center gap-2">
							<div>Link:</div>
							<div class="mb-0.5">
								<a href="https://{data[currentStep]?.link}" class="underline text-blue-500"
									>{data[currentStep]?.link}</a
								>
							</div>
						</div>
					{/if}
					<div class="form-check my-auto flex items-center">
						<Checkbox
							class="form-check-input mr-1"
							id="terms"
							type="checkbox"
							bind:checked={makeCheckFalse}
							name="modal"
							value={data[currentStep]?.id}
						/>
						<label class="form-check-label mx-1 stop-dragging" for="terms"
							>이 메시지를 다시 표시하지 않음</label
						>
					</div>
				</div>
				<div>
					<Button type="submit" class="btn btn-secondary">닫기</Button>
				</div>
			</div>
		</form>
	</Modal>
{/if}

<style>
	.stop-dragging {
		-ms-user-select: none;
		-moz-user-select: -moz-none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		user-select: none;
	}
</style>
