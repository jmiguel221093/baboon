/* eslint-disable */
import React from "react";
import type { ComponentMeta } from "@storybook/react";

import { Button, Modal, Text } from "../src/components";

export default {
	title: "AllComponents/Modal",
	component: Modal,
} as ComponentMeta<typeof Modal>;

export const Basic = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			title="Modal title"
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const WithFooterActions = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			title="Modal title"
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const Dismissible = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			title="Modal title"
			onClose={handleDismiss}
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const WithTitleMetadata = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const ExtraSmall = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			size="extra-small"
			primaryAction={{
				content: "Save",
			}}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const Small = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			size="small"
			primaryAction={{
				content: "Save",
			}}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const Large = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			size="large"
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const FooterContent = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	const footerContentMarkup = <Button link>Copy</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
			footer={footerContentMarkup}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const InnerScrollContent = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	const footerContentMarkup = <Button link>Copy</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			height={600}
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
			footer={footerContentMarkup}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis. Duis mauris augue, efficitur eu arcu
				sit amet, posuere dignissim neque. Aenean enim sem, pharetra et
				magna sit amet, luctus aliquet nibh. Curabitur auctor leo et
				libero consectetur gravida. Morbi gravida et sem dictum varius.
				Proin eget viverra sem, non euismod est. Maecenas facilisis urna
				in lectus aliquet venenatis. Etiam et metus nec mauris
				condimentum vulputate. Aenean volutpat odio quis egestas tempus.
				Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex
				eget elementum. Aliquam ut feugiat felis. Duis mauris augue,
				efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim
				sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur
				auctor leo et libero consectetur gravida. Morbi gravida et sem
				dictum varius. Proin eget viverra sem, non euismod est. Maecenas
				facilisis urna in lectus aliquet venenatis. Etiam et metus nec
				mauris condimentum vulputate. Aenean volutpat odio quis egestas
				tempus. Fusce tempor vulputate luctus. Pellentesque vulputate
				viverra ex eget elementum. Aliquam ut feugiat felis. Duis mauris
				augue, efficitur eu arcu sit amet, posuere dignissim neque.
				Aenean enim sem, pharetra et magna sit amet, luctus aliquet
				nibh. Curabitur auctor leo et libero consectetur gravida. Morbi
				gravida et sem dictum varius. Proin eget viverra sem, non
				euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const ViewportScroll = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = <Button onClick={toggleModal}>Open modal</Button>;
	const footerContentMarkup = <Button link>Copy</Button>;
	return (
		<Modal
			open={open}
			metaData="Meta data"
			title="Modal title"
			onClose={handleDismiss}
			primaryAction={{
				content: "Save",
			}}
			secondaryActions={[
				{
					content: "Cancel",
					onPress: handleDismiss,
				},
			]}
			trigger={trigger}
			footer={footerContentMarkup}
		>
			<Text variant="body" color="neutral">
				Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim
				neque. Aenean enim sem, pharetra et magna sit amet, luctus
				aliquet nibh. Curabitur auctor leo et libero consectetur
				gravida. Morbi gravida et sem dictum varius. Proin eget viverra
				sem, non euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis. Duis mauris augue, efficitur eu arcu
				sit amet, posuere dignissim neque. Aenean enim sem, pharetra et
				magna sit amet, luctus aliquet nibh. Curabitur auctor leo et
				libero consectetur gravida. Morbi gravida et sem dictum varius.
				Proin eget viverra sem, non euismod est. Maecenas facilisis urna
				in lectus aliquet venenatis. Etiam et metus nec mauris
				condimentum vulputate. Aenean volutpat odio quis egestas tempus.
				Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex
				eget elementum. Aliquam ut feugiat felis. Duis mauris augue,
				efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim
				sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur
				auctor leo et libero consectetur gravida. Morbi gravida et sem
				dictum varius. Proin eget viverra sem, non euismod est. Maecenas
				facilisis urna in lectus aliquet venenatis. Etiam et metus nec
				mauris condimentum vulputate. Aenean volutpat odio quis egestas
				tempus. Fusce tempor vulputate luctus. Pellentesque vulputate
				viverra ex eget elementum. Aliquam ut feugiat felis. Duis mauris
				augue, efficitur eu arcu sit amet, posuere dignissim neque.
				Aenean enim sem, pharetra et magna sit amet, luctus aliquet
				nibh. Curabitur auctor leo et libero consectetur gravida. Morbi
				gravida et sem dictum varius. Proin eget viverra sem, non
				euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis. Duis mauris augue, efficitur eu arcu
				sit amet, posuere dignissim neque. Aenean enim sem, pharetra et
				magna sit amet, luctus aliquet nibh. Curabitur auctor leo et
				libero consectetur gravida. Morbi gravida et sem dictum varius.
				Proin eget viverra sem, non euismod est. Maecenas facilisis urna
				in lectus aliquet venenatis. Etiam et metus nec mauris
				condimentum vulputate. Aenean volutpat odio quis egestas tempus.
				Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex
				eget elementum. Aliquam ut feugiat felis. Duis mauris augue,
				efficitur eu arcu sit amet, posuere dignissim neque. Aenean enim
				sem, pharetra et magna sit amet, luctus aliquet nibh. Curabitur
				auctor leo et libero consectetur gravida. Morbi gravida et sem
				dictum varius. Proin eget viverra sem, non euismod est. Maecenas
				facilisis urna in lectus aliquet venenatis. Etiam et metus nec
				mauris condimentum vulputate. Aenean volutpat odio quis egestas
				tempus. Fusce tempor vulputate luctus. Pellentesque vulputate
				viverra ex eget elementum. Aliquam ut feugiat felis. Duis mauris
				augue, efficitur eu arcu sit amet, posuere dignissim neque.
				Aenean enim sem, pharetra et magna sit amet, luctus aliquet
				nibh. Curabitur auctor leo et libero consectetur gravida. Morbi
				gravida et sem dictum varius. Proin eget viverra sem, non
				euismod est. Maecenas facilisis urna in lectus aliquet
				venenatis. Etiam et metus nec mauris condimentum vulputate.
				Aenean volutpat odio quis egestas tempus. Fusce tempor vulputate
				luctus. Pellentesque vulputate viverra ex eget elementum.
				Aliquam ut feugiat felis. Duis mauris augue, efficitur eu arcu
				sit amet, posuere dignissim neque. Aenean enim sem, pharetra et
				magna sit amet, luctus aliquet nibh. Curabitur auctor leo et
				libero consectetur gravida. Morbi gravida et sem dictum varius.
				Proin eget viverra sem, non euismod est. Maecenas facilisis urna
				in lectus aliquet venenatis. Etiam et metus nec mauris
				condimentum vulputate. Aenean volutpat odio quis egestas tempus.
				Fusce tempor vulputate luctus. Pellentesque vulputate viverra ex
				eget elementum. Aliquam ut feugiat felis.
			</Text>
		</Modal>
	);
};

export const NoTrigger = () => {
	const [open, setOpen] = React.useState(false);
	const toggleModal = () => setOpen(!open);
	const handleDismiss = () => {
		toggleModal();
	};
	const trigger = (
		<Button onClick={toggleModal}>Open modal with no modal trigger</Button>
	);
	return (
		<>
			{trigger}
			<Modal
				open={open}
				title="Modal title"
				onClose={handleDismiss}
				primaryAction={{
					content: "Save",
				}}
				secondaryActions={[
					{
						content: "Cancel",
						onPress: handleDismiss,
					},
				]}
			>
				<Text variant="body" color="neutral">
					Duis mauris augue, efficitur eu arcu sit amet, posuere
					dignissim neque. Aenean enim sem, pharetra et magna sit
					amet, luctus aliquet nibh. Curabitur auctor leo et libero
					consectetur gravida. Morbi gravida et sem dictum varius.
					Proin eget viverra sem, non euismod est. Maecenas facilisis
					urna in lectus aliquet venenatis. Etiam et metus nec mauris
					condimentum vulputate. Aenean volutpat odio quis egestas
					tempus. Fusce tempor vulputate luctus. Pellentesque
					vulputate viverra ex eget elementum. Aliquam ut feugiat
					felis.
				</Text>
			</Modal>
		</>
	);
};
